import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    data: {
      session_id: id,
      resource_context: body,
      updated_at: new Date().toISOString(),
    },
  });
}
