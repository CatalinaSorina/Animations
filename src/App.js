import React from "react";
import "./App.css";
import Typing from "react-typing-animation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typing speed={300}>
          <h2>Animations</h2>
          <h3>Spinners</h3>
        </Typing>
      </header>
    </div>
  );
}

export default App;
