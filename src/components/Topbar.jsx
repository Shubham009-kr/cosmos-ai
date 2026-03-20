import { Trash2, Menu } from "lucide-react";

const Topbar = ({ onClear, onMenuClick }) => {
  return (
    <div className="flex items-center justify-between px-4 md:px-6 py-4
      border-b border-[rgba(100,160,255,0.12)]
      bg-[rgba(7,13,24,0.7)] backdrop-blur-md">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-white"
        >
          <Menu size={20} />
        </button>

        <span className="font-mono text-xs tracking-[0.18em] uppercase text-[#6888aa]">
          Transmission Channel
        </span>

        <span className="hidden sm:inline px-3 py-[2px] rounded-full text-[10px] font-mono tracking-wider
          border border-[rgba(79,143,255,0.25)]
          text-[#4f8fff] bg-[rgba(79,143,255,0.1)]">
          MISSION: COSMOS-1
        </span>
      </div>

      {/* RIGHT */}
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm
        border border-[rgba(100,160,255,0.12)]
        text-[#6888aa]
        hover:bg-[rgba(79,143,255,0.1)]
        hover:text-white transition-all duration-200"
      >
        <Trash2 size={14} />
        <span className="hidden sm:inline">Clear</span>
      </button>
    </div>
  );
};

export default Topbar;