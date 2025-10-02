import Link from "next/link";

export const ScrolledNavLogo = () => {
  return (
    <Link
      href="/"
      aria-label="AIXBOT Automation"
      className="group flex items-center"
    >
      <div className="text-base font-semibold tracking-tight text-zinc-50 transition-colors group-hover:text-zinc-200">
        AIXBOT
      </div>
      <div className="ml-1 rounded-sm bg-zinc-800/60 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-zinc-300 ring-1 ring-inset ring-zinc-700/60 transition-colors group-hover:text-zinc-200">
        Automation
      </div>
    </Link>
  );
};
