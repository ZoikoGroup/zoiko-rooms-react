import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    ok: true,
    data: {
      session_id: id,
      principal_id: undefined,
      principal_role: "anonymous",
      market_code: "GB",
      locale: "en-GB",
      active_resources: [],
    },
  });
}
