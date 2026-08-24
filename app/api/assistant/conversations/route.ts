import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    data: [],
    pagination: { total: 0, limit: 50, offset: 0, has_more: false },
  });
}
