import React, { useState } from "react";
import Starfield from "./components/Starfield";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import { sendMessageToGroq } from "./services/api";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTopicSelect = (prompt) => {
    handleSend(prompt);
  };

  const handleSuggestionClick = (text) => {
    handleSend(text);
  };

  const handleClear = () => {
    setMessages([]);
  };

  const handleSend = async (text) => {
  if (!text.trim() || isLoading) return;

  const userMessage = { role: "user", content: text };
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
      <Starfield />

      <div className="relative z-10 flex w-full">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSelectTopic={handleTopicSelect}
        />

        <div className="flex flex-col flex-1 h-screen">
          <Topbar
            onClear={handleClear}
            onMenuClick={() => setIsSidebarOpen(true)}
          />
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            onSuggestionClick={handleSuggestionClick}
          />
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