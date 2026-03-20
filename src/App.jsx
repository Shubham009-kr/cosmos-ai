import React, { useState } from "react";
import Starfield from "./components/Starfield";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";

const App = () => {
  // 📱 Sidebar state (for mobile drawer)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 💬 Chat state
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 🧠 Handle topic click from sidebar
  const handleTopicSelect = (prompt) => {
    handleSend(prompt);
  };

  // 🌌 Handle suggestions from welcome screen
  const handleSuggestionClick = (text) => {
    handleSend(text);
  };

  // 🧹 Clear chat
  const handleClear = () => {
    setMessages([]);
  };

  // 🚀 Send message (API integration comes next)
  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: text }]);

    // Simulate loading (replace with Groq later)
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `🌌 **Cosmic Insight:** You asked about "${text}".  
This is where your Groq-powered intelligence will respond with knowledge about the universe.`,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="relative flex min-h-screen bg-black text-white">
      {/* 🌠 Background */}
      <Starfield />

      <div className="relative z-10 flex w-full">
        {/* 🪐 Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSelectTopic={handleTopicSelect}
        />

        {/* 🧩 Main Layout */}
        <div className="flex flex-col flex-1 h-screen">
          {/* 🎛️ Topbar */}
          <Topbar
            onClear={handleClear}
            onMenuClick={() => setIsSidebarOpen(true)}
          />

          {/* 💬 Chat Window */}
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            onSuggestionClick={handleSuggestionClick}
          />

          {/* Input Box */}
          <InputBox
            onSend={handleSend}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default App;