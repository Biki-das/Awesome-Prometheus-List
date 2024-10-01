import { SearchIcon } from "../icons/SearchIcon";
import { SlashIcon } from "../icons/SlashIcon";
import { SearchInputProps } from "./types";
import { useRef, useEffect } from "react";

export function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleGlobalSlashKey(e: KeyboardEvent) {
    if (e.key === "/") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleGlobalSlashKey);

    return () => {
      window.removeEventListener("keydown", handleGlobalSlashKey);
    };
  }, []);

  return (
    <div className="relative mx-auto">
      <input
        type="search"
        ref={inputRef}
        placeholder="Search for a component"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="placeholder-xl-light placeholder:text-xs placeholder:font-medium border border-base-white py-[7px] px-7 rounded-[4px] mt-5 block w-full focus:border-blue-500 focus:outline-none"
      />
      <SearchIcon className="absolute top-[2px] bottom-0 m-auto left-3" />
      <div className="bg-slate-50 rounded-[4px] border-slate-100 border rounder-md absolute top-0 bottom-0 m-auto right-3 w-[18px] h-[18px] flex items-center justify-center isolation-auto">
        <SlashIcon />
      </div>
    </div>
  );
}
