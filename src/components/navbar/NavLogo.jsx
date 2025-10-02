import Link from "next/link";
import React from "react";

export const NavLogo = () => {
  return (
    <Link
      href="/"
      aria-label="AIXBOT Automation"
      className="group inline-flex items-center justify-center"
    >
      <span className="text-lg font-semibold tracking-tight text-zinc-50 transition-colors group-hover:text-zinc-200 sm:text-xl">
        AIXBOT
      </span>
      <span className="ml-1 rounded-sm bg-zinc-800/60 px-1.5 py-0.5 text-xs font-medium tracking-wide text-zinc-300 ring-1 ring-inset ring-zinc-700/60 transition-colors group-hover:text-zinc-200 sm:text-sm">
        Automation
      </span>
    </Link>
  );
};

