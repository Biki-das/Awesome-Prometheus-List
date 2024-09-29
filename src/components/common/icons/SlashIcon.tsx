interface SlashIconProps {
  className?: string;
}

export function SlashIcon({ className }: SlashIconProps) {
  return (
    <svg
      className={className}
      width="4"
      height="10"
      viewBox="0 0 4 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.82306 0.386363L1.47931 9.09375H0.176048L2.5198 0.386363H3.82306Z"
        fill="#64748B"
      />
    </svg>
  );
}
