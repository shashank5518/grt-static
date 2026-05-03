// components/ViewPropertiesButton.tsx
import Link from "next/link";

export function ViewPropertiesButton() {
  return (
    <Link
      href="/properties"
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[color:var(--brand-900)] shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
    >
      View Properties
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 7h8M7 3l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}