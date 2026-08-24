import { NextRequest, NextResponse } from "next/server";

const sessions = new Map<string, { id: string; status: string }>();

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = sessions.get(id);

  if (!session) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          type: "https://zoiko.ai/problems/not-found",
          title: "Not Found",
          status: 404,
          detail: `Session ${id} not found`,
          instance: `/api/assistant/sessions/${id}`,
        },
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ok: true,
    data: {
      session_id: session.id,
      status: session.status,
    },
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  let session = sessions.get(id);
  if (!session) {
    session = { id, status: "ACTIVE" };
    sessions.set(id, session);
  }

  Object.assign(session, body);

  return NextResponse.json({
    ok: true,
    data: { session_id: session.id, status: session.status },
  });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  sessions.delete(id);

  return NextResponse.json({ ok: true, data: { deleted: true } });
}
