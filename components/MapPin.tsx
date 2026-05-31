export function MapPin() {
  return (
    <svg
  viewBox="0 0 24 24"
  fill="none"
  className="
    w-4 h-4
    md:w-6 md:h-6

    drop-shadow-lg
    transition-all
    duration-300
    ease-out
  "
>
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#0B1220"
      />

      <circle
        cx="12"
        cy="9"
        r="3"
        fill="white"
      />
    </svg>
  );
}