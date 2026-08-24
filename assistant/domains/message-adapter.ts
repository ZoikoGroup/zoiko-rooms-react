import type { MessageSummary } from "./types";

const MESSAGE_FIXTURE: MessageSummary = {
  conversation_id: "conv_msg_001",
  message_count: 12,
  participants: ["Alex M.", "Sam K."],
  last_message_at: "2026-08-18T16:30:00Z",
  unread_count: 2,
};

export async function getMessageSummary(
  _principalId: string,
  conversationId?: string
): Promise<MessageSummary> {
  return {
    ...MESSAGE_FIXTURE,
    conversation_id: conversationId || MESSAGE_FIXTURE.conversation_id,
  };
}

export async function draftMessage(
  _principalId: string,
  context: { to?: string; topic?: string; tone?: string }
): Promise<{ draft: string; notes: string }> {
  const tone = context.tone || "friendly and professional";
  const topic = context.topic || "general inquiry";

  return {
    draft: `Hi ${context.to || "[Name]"},\n\nThank you for your message regarding ${topic}. I wanted to follow up on this.\n\nPlease let me know if you have any questions or need further information.\n\nBest regards,\n[Your name]`,
    notes: `This is a draft message (${tone} tone). Review and edit before sending. The assistant cannot send messages on your behalf.`,
  };
}

export async function summarizeMessages(
  _principalId: string,
  conversationId: string
): Promise<{ summary: string; key_points: string[] }> {
  return {
    summary: `Conversation ${conversationId}: A discussion about room availability and booking terms. The host confirmed the room is available from 1 September. The renter asked about the deposit amount and pet policy.`,
    key_points: [
      "Room available from 1 September 2026",
      "Deposit is equivalent to 2 months' rent",
      "Pets are not permitted in this property",
      "Next step: Renter to submit booking application",
    ],
  };
}
