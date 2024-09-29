interface SearchIconProps {
  className?: string;
}

export function SearchIcon({ className }: SearchIconProps) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33334 7.33334H7.80667L7.62001 7.15334C8.42001 6.22 8.83334 4.94667 8.60667 3.59334C8.29334 1.74001 6.74667 0.260005 4.88 0.0333384C2.06 -0.313328 -0.313328 2.06 0.0333384 4.88C0.260005 6.74667 1.74001 8.29334 3.59334 8.60667C4.94667 8.83334 6.22001 8.42 7.15334 7.62L7.33334 7.80667V8.33334L10.1667 11.1667C10.44 11.44 10.8867 11.44 11.16 11.1667C11.4333 10.8933 11.4333 10.4467 11.16 10.1733L8.33334 7.33334ZM4.33334 7.33334C2.67334 7.33334 1.33334 5.99334 1.33334 4.33334C1.33334 2.67334 2.67334 1.33334 4.33334 1.33334C5.99334 1.33334 7.33334 2.67334 7.33334 4.33334C7.33334 5.99334 5.99334 7.33334 4.33334 7.33334Z"
        fill="#94A3B8"
      />
    </svg>
  );
}
