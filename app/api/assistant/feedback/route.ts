import { NextRequest, NextResponse } from "next/server";
import { SubmitFeedbackSchema } from "@/assistant/types/api";

const feedbackStore: Array<{ id: string; data: unknown; created_at: string }> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = SubmitFeedbackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            type: "https://zoiko.ai/problems/validation-error",
            title: "Validation Error",
            status: 400,
            detail: "Invalid request body",
            instance: "/api/assistant/feedback",
            errors: parsed.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const feedback = {
      id: `fb_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      data: parsed.data,
      created_at: new Date().toISOString(),
    };

    feedbackStore.push(feedback);

    return NextResponse.json({
      ok: true,
      data: {
        feedback_id: feedback.id,
        status: "received",
        created_at: feedback.created_at,
      },
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: {
          type: "https://zoiko.ai/problems/internal-error",
          title: "Internal Error",
          status: 500,
          detail: "Failed to submit feedback",
          instance: "/api/assistant/feedback",
        },
      },
      { status: 500 }
    );
  }
}
