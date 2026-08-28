import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  recipient: string;
  subject: string;
  body: string;
}

// Best-effort email stand-in (same convention as the rest of the assistant:
// there is no live email provider wired locally). Replace the resolver below
// with a real email/support-ticket adapter before GA.
function sendEmail(payload: ContactBody): { ok: boolean; id: string } {
  if (!payload.recipient || !payload.subject || !payload.body) {
    throw new Error("recipient, subject and body are required");
  }
  return { ok: true, id: `msg_${Date.now().toString(36)}` };
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactBody;
    const result = sendEmail(body);

    return NextResponse.json({
      ok: true,
      data: {
        message_id: result.id,
        recipient: body.recipient,
        subject: body.subject,
        status: "SENT",
        sent_at: new Date().toISOString(),
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json(
      {
        ok: false,
        error: {
          type: "https://zoiko.ai/problems/email-send-failed",
          title: "Email Send Failed",
          status: 422,
          detail: message,
        },
      },
      { status: 422 }
    );
  }
}
