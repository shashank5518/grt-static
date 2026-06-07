import Link from "next/link";

export function FeedbackButton() {
  return (
    <Link
      href="/feedback"
      target="_blank"

      className="fixed
        bottom-20
        right-5
        z-50
        inline-flex
        h-12
        items-center
        justify-center
        rounded-full
        border
        border-slate-200
        bg-white
        px-5
        text-sm
        font-semibold
        text-slate-700
        shadow-lg
        transition-all
        hover:border-slate-300
        hover:bg-slate-50
        hover:text-slate-900
        focus:outline-none
        focus:ring-4
        focus:ring-slate-300/25
"
    >
      Feedback
    </Link>
  );
}