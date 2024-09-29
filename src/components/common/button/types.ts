import { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconPosition?: "left" | "right";
}
