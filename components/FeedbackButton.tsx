import Link from "next/link";

export function FeedbackButton() {
  return (
    <Link
      href="/feedback"
      target="_blank"
      className="
        fixed
        bottom-24
        right-6
        z-50
        rounded-full
        bg-slate-900
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-lg
        hover:scale-105
        transition
      "
    >
      Feedback
    </Link>
  );
}