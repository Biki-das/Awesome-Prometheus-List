import { forwardRef } from "react";
import { ButtonProps } from "./types";
import { Spinner } from "../spinner/Spinner";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, disabled = false, className, icon, loading = false, onClick },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {loading !== true && children}
        {loading ? <Spinner size={20} color="black" /> : null}
        {icon ? icon : null}
      </button>
    );
  }
);

Button.displayName = "Button";
