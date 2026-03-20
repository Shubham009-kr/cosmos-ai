import React, { useEffect, useRef } from "react";

const ChatWindow = ({ messages, isLoading, onSuggestionClick }) => {
  const bottomRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 flex flex-col gap-6">

      {/* 🌌 Welcome Screen */}
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center mt-10 animate-fadeIn">

          {/* Orb */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6
            bg-gradient-to-br from-[#4f8fff] to-[#1a2a5a]
            shadow-[0_0_60px_rgba(79,143,255,0.4)] animate-pulse">
            🪐
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-2
            bg-gradient-to-r from-white to-[#7bb3ff] text-transparent bg-clip-text">
            Ask the Universe
          </h1>

          <p className="text-sm md:text-base text-[#6888aa] max-w-lg mb-8">
            COSMO is your AI-powered guide to space — from the Big Bang to the edge of the universe.
          </p>

          {/* Suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-xl">
            {[
              "How big is the universe?",
              "What happens inside a black hole?",
              "Explain the Big Bang theory",
              "Could humans live on another planet?"
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => onSuggestionClick(q)}
                className="text-left p-4 rounded-xl border border-[rgba(100,160,255,0.12)]
                bg-[#0d1826]/80 hover:bg-[rgba(79,143,255,0.08)]
                transition-all duration-200 hover:scale-[1.02]"
              >
                <span className="text-sm text-[#e8f0ff]">{q}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 💬 Messages */}
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex gap-3 ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {/* Avatar */}
          <div className={`w-8 h-8 flex items-center justify-center rounded-md text-sm
            ${msg.role === "user"
              ? "bg-purple-500/20 border border-purple-400"
              : "bg-blue-500/20 border border-blue-400"
            }`}>
            {msg.role === "user" ? "👤" : "🪐"}
          </div>

          {/* Bubble */}
          <div
            className={`max-w-[75%] px-4 py-3 rounded-xl text-sm leading-relaxed
            ${
              msg.role === "user"
                ? "bg-blue-500/20 border border-blue-400"
                : "bg-[#0d1826] border border-[rgba(100,160,255,0.12)]"
            }`}
            dangerouslySetInnerHTML={{
              __html: formatText(msg.content),
            }}
          />
        </div>
      ))}

      {/* ⏳ Typing Indicator */}
      {isLoading && (
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-500/20 border border-blue-400">
            🪐
          </div>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

// ✨ Text formatting (bold, italic, code)
const formatText = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-blue-300'>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em class='text-purple-300'>$1</em>")
    .replace(/`(.*?)`/g, "<code class='bg-blue-500/10 px-1 rounded'>$1</code>")
    .replace(/\n/g, "<br>");
};

export default ChatWindow;