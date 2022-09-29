import { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [people, setpeople] = useState(data);
  return (
    <>
      <header>
        <div className="conatiner">
          <h2>{people.length} birthday today</h2>
        </div>
        <List people={people} />
        <button onClick={() => setpeople([])}>Clear All</button>
      </header>
    </>
  );
}

export default App;
