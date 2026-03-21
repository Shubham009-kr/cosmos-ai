import React, { useState } from "react";
import { Send } from "lucide-react";

const InputBox = ({ onSend, isLoading }) => {
  const [input, setInput] = useState("");

  // Auto resize inputbox
  const handleInput = (e) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    onSend(input);
    setInput("");
  };

  return (
    <div className="px-4 md:px-6 py-4 bg-gradient-to-t from-[#070d18] to-transparent">
      
      <div className="flex items-end gap-2 bg-[#0d1826] border border-[rgba(100,160,255,0.12)]
        rounded-xl px-3 py-2 focus-within:border-blue-400 transition-all">

        <textarea
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Ask COSMO anything about space..."
          rows={1}
          className="flex-1 bg-transparent resize-none outline-none text-sm text-white
          placeholder:text-[#3a5070] max-h-[120px]"
        />

        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="w-9 h-9 flex items-center justify-center rounded-lg
          bg-gradient-to-br from-blue-500 to-blue-600 text-white
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:scale-105 transition-all"
        >
          <Send size={16} />
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-2 text-xs text-[#3a5070]">
        <span>
          Press <kbd className="px-1 border rounded">Enter</kbd> to send ·{" "}
          <kbd className="px-1 border rounded">Shift+Enter</kbd> for newline
        </span>

        <span className="hidden sm:block">
          Powered by <span className="text-blue-400">Groq</span>
        </span>
      </div>
    </div>
  );
};

export default InputBox;