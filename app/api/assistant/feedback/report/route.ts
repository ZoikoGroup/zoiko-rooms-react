import { NextRequest, NextResponse } from "next/server";
import { ReportFeedbackSchema } from "@/assistant/types/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = ReportFeedbackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            type: "https://zoiko.ai/problems/validation-error",
            title: "Validation Error",
            status: 400,
            detail: "Invalid request body",
            instance: "/api/assistant/feedback/report",
            errors: parsed.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      data: {
        report_id: `rpt_${Date.now()}`,
        status: "received",
        created_at: new Date().toISOString(),
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
          detail: "Failed to submit report",
          instance: "/api/assistant/feedback/report",
        },
      },
      { status: 500 }
    );
  }
}
