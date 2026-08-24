import { NextRequest, NextResponse } from "next/server";
import { updateHandoff } from "@/assistant/evidence/handoff-log";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const handoff = updateHandoff(id, { status: "CANCELLED" });

  if (!handoff) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          type: "https://zoiko.ai/problems/not-found",
          title: "Not Found",
          status: 404,
          detail: `Handoff ${id} not found`,
          instance: `/api/assistant/handoffs/${id}/cancel`,
        },
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true, data: { handoff_id: id, status: "CANCELLED" } });
}
