import { ReactNode } from "react";

export const Label = ({ children }: { children: ReactNode }) => {
  return (
    <label className="uppercase text-[10px] font-bold bg-slate-100 text-center px-2 py-1 rounded-sm text-slate-400">
      {children}
    </label>
  );
};
