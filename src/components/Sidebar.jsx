import { Rocket, Globe, Star, Orbit, Telescope, Atom } from "lucide-react";

const topics = [
  { label: "Black Holes", icon: "🕳️", prompt: "Tell me about black holes" },
  { label: "Exoplanets", icon: "🌍", prompt: "What are the most exciting exoplanets?" },
  { label: "Stars & Nebulae", icon: "⭐", prompt: "Explain the life cycle of a star" },
  { label: "Space Missions", icon: "🚀", prompt: "History of human spaceflight missions" },
  { label: "Dark Matter", icon: "🌌", prompt: "What is dark matter and dark energy?" },
  { label: "Gravity & Physics", icon: "🌀", prompt: "How does gravity work in space?" },
  { label: "Mars & Planets", icon: "🔴", prompt: "Tell me about Mars exploration" },
  { label: "Astrobiology", icon: "👽", prompt: "Is there extraterrestrial life?" },
  { label: "Telescopes", icon: "🔭", prompt: "What is the James Webb Space Telescope?" },
];

const Sidebar = ({ onSelectTopic }) => {
  return (
    <aside className="hidden md:flex flex-col w-[280px] h-screen bg-gradient-to-b from-[#0a1220] to-[#070d18] border-r border-[rgba(100,160,255,0.12)]">

      {/* LOGO */}
      <div className="p-6 border-b border-[rgba(100,160,255,0.12)]">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3
          bg-gradient-to-br from-[#1a2f5a] to-[#0d1826]
          border border-[rgba(79,143,255,0.35)]
          shadow-[0_0_20px_rgba(79,143,255,0.15)]">
          🪐
        </div>

        <div className="font-mono text-xl font-bold tracking-widest
          bg-gradient-to-r from-[#7bb3ff] to-[#c4b5fd] text-transparent bg-clip-text">
          COSMO
        </div>

        <div className="text-[10px] text-[#6888aa] tracking-[0.18em] uppercase mt-1">
          Space Intelligence Unit
        </div>
      </div>

      {/* TOPICS */}
      <div className="px-4 py-5">
        <div className="text-[9px] font-mono tracking-[0.22em] text-[#3a5070] uppercase mb-3 px-2">
          Explore Topics
        </div>

        {topics.map((topic, i) => (
          <button
            key={i}
            onClick={() => onSelectTopic(topic.prompt)}
            className="w-full flex items-center gap-3 px-3 py-2 mb-1 rounded-lg text-sm text-[#6888aa]
            hover:bg-[rgba(79,143,255,0.08)] hover:text-white transition-all duration-200"
          >
            <span className="text-base">{topic.icon}</span>
            {topic.label}
          </button>
        ))}
      </div>

      {/* STATS */}
      <div className="mt-auto mx-4 mb-4 bg-[rgba(79,143,255,0.04)] border border-[rgba(100,160,255,0.12)] rounded-xl p-4 text-sm">
        <div className="flex justify-between py-1 text-[#6888aa] border-b border-[rgba(79,143,255,0.06)]">
          <span>Observable Universe</span>
          <span className="text-[#4f8fff] font-mono text-xs">93B ly</span>
        </div>
        <div className="flex justify-between py-1 text-[#6888aa] border-b border-[rgba(79,143,255,0.06)]">
          <span>Known Exoplanets</span>
          <span className="text-[#4f8fff] font-mono text-xs">5,700+</span>
        </div>
        <div className="flex justify-between py-1 text-[#6888aa]">
          <span>Galaxies (est.)</span>
          <span className="text-[#4f8fff] font-mono text-xs">2 Trillion</span>
        </div>
      </div>

      {/* STATUS */}
      <div className="flex items-center gap-2 px-4 pb-4 text-xs text-green-400 font-mono">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        AI Systems Online
      </div>
    </aside>
  );
};

export default Sidebar;