import { useState } from "react";
import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  const [view, setView] = useState("virtual");

  return (
    <div className="app">
      <div className="controls">
        <button onClick={() => setView("virtual")}>Virtual List</button>
        <button onClick={() => setView("regular")}>Regular List</button>
      </div>

      {view === "virtual" ? (
        <VirtualList itemCount={10000} />
      ) : (
        <RegularList itemCount={10000} />
      )}
    </div>
  );
}

export default App;
