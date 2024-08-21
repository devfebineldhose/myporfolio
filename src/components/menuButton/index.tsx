export default function MenuButton({
  name,
  toggle,
}: {
  name: string;
  toggle: () => void;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      onClick={toggle}
      className="inline-flex items-center md:hidden"
    >
      <path
        fill="currentColor"
        d={
          name === "close"
            ? "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            : "M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
        }
      />
    </svg>
  );
}
