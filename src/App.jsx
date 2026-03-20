import Starfield from "./components/Starfield";
import Sidebar from "./components/Sidebar";

function App() {
  const handleTopicSelect = (prompt) => {
    console.log("Selected:", prompt);
  };

  return (
    <div className="relative flex">
      <Starfield />

      <div className="relative z-10 flex w-full">
        <Sidebar onSelectTopic={handleTopicSelect} />

        <div className="flex-1 text-white flex items-center justify-center">
          Main Chat Area Coming...
        </div>
      </div>
    </div>
  );
}

export default App;