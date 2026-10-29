import { Pool, type PoolClient } from "pg";
import { getConfig } from "../config";

let _pool: Pool | null = null;

export function getPool(): Pool {
  if (!_pool) {
    const url = getConfig().database.url;
    if (!url) {
      throw new Error("DATABASE_URL is not configured");
    }
    _pool = new Pool({
      connectionString: url,
      max: getConfig().database.maxConnections,
    });
  }
  return _pool;
}

export function resetPool(): void {
  if (_pool) {
    void _pool.end();
    _pool = null;
  }
}

export function principalSetting(
  principalId: string | undefined
): string {
  return principalId || "anonymous";
}

// is_local = true: the setting lasts until the end of the current transaction,
// so it can never leak to the next user of a pooled connection.
const SET_PRINCIPAL_SQL = `SELECT set_config('app.current_principal_id', $1, true)`;

/**
 * Runs fn with app.current_principal_id set for RLS. Everything runs on ONE
 * checked-out connection inside ONE transaction: a transaction-local setting
 * issued through pool.query would end with that single statement, and the
 * pool may hand each later query a different connection anyway.
 */
export async function withPrincipal<T>(
  principalId: string | undefined,
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    await client.query(SET_PRINCIPAL_SQL, [principalSetting(principalId)]);
    const result = await fn(client);
    await client.query("COMMIT");
    return result;
  } catch (err) {
    await client.query("ROLLBACK").catch(() => undefined);
    throw err;
  } finally {
    client.release();
  }
}
