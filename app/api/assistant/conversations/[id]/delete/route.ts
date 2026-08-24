import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    ok: true,
    data: {
      conversation_id: id,
      status: "DELETED_TOMBSTONE",
      deleted_at: new Date().toISOString(),
    },
  });
}
