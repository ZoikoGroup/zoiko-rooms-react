import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    ok: true,
    data: {
      conversation_id: id,
      status: "ACTIVE",
      created_at: new Date().toISOString(),
    },
  });
}
