import { NextRequest, NextResponse } from "next/server";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    ok: true,
    data: {
      export_id: `exp_${Date.now()}`,
      conversation_id: id,
      status: "pending",
      created_at: new Date().toISOString(),
    },
  });
}
