type AssistantAvatarSize = "sm" | "md" | "lg";

const sizes: Record<AssistantAvatarSize, string> = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-12 w-12",
};

export function AssistantAvatar({ size = "sm" }: { size?: AssistantAvatarSize }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full ${sizes[size]}`}
      style={{ backgroundColor: "#d9e2f5" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/zoikorooms-icon-png.png"
        alt=""
        draggable={false}
        className="h-full w-full object-cover"
      />
    </span>
  );
}