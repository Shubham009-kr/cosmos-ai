import { useState } from "react";
import Starfield from "./components/Starfield";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTopicSelect = (prompt) => {
    console.log("Selected:", prompt);
  };

  const handleClear = () => {
    console.log("Chat cleared");
  };

  return (
    <div className="relative flex">
      <Starfield />

      <div className="relative z-10 flex w-full">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSelectTopic={handleTopicSelect}
        />

        <div className="flex flex-col flex-1 h-screen text-white">
          <Topbar
            onClear={handleClear}
            onMenuClick={() => setIsSidebarOpen(true)}
          />

          <div className="flex-1 flex items-center justify-center">
            Chat UI Coming...
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;