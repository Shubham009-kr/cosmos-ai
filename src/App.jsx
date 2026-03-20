import React, { useState } from "react";
import Starfield from "./components/Starfield";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import { sendMessageToGroq } from "./services/api";

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
  const handleSend = async (text) => {
  if (!text.trim() || isLoading) return;

  const userMessage = { role: "user", content: text };

  // Add user message
  setMessages((prev) => [...prev, userMessage]);

  setIsLoading(true);

  try {
    const response = await sendMessageToGroq([
      ...messages,
      userMessage,
    ]);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: response },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "⚠️ Signal lost in deep space. Please try again.",
      },
    ]);
  }

  setIsLoading(false);
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