import { Pool } from "pg";
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

const SET_PRINCIPAL_SQL = `SELECT set_config('app.current_principal_id', $1, true)`;
const RESET_PRINCIPAL_SQL = `SELECT set_config('app.current_principal_id', '', false)`;

export async function withPrincipal<T>(
  principalId: string | undefined,
  fn: (pool: Pool) => Promise<T>
): Promise<T> {
  const pool = getPool();
  const value = principalSetting(principalId);
  try {
    await pool.query(SET_PRINCIPAL_SQL, [value]);
    return await fn(pool);
  } finally {
    await pool.query(RESET_PRINCIPAL_SQL).catch(() => undefined);
  }
}
