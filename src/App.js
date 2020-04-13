import React from "react";
import "./App.css";
import Typing from "react-typing-animation";
import TranslateExample from "./components/TranslateExample";
import RoundedSquares from "./components/RoundedSquares";
import Cross from "./components/Cross";
import Dots from "./components/Dots";

function App() {
  return (
    <div className="App">
      <Typing speed={100}>
        <h2>Animations</h2>
        {/* <h3>Spinners</h3> */}
      </Typing>
      <main>
        <TranslateExample title="Skew">
          <RoundedSquares animation="skew" />
        </TranslateExample>
        <TranslateExample title="Scale">
          <RoundedSquares animation="scale" />
        </TranslateExample>
        <TranslateExample title="Rotate">
          <RoundedSquares animation="rotate" />
        </TranslateExample>
        <TranslateExample title="Matrix">
          <RoundedSquares animation="matrix" />
        </TranslateExample>
        <TranslateExample title="Translate">
          <RoundedSquares animation="translate" />
        </TranslateExample>
      </main>
      <Typing speed={200}>
        <h3>Spinners</h3>
      </Typing>
      <main>
        <TranslateExample title="Cross">
          <Cross colors={["rgba(255,255,255,1)", "rgba(255,255,255,0.75)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.25)"]} />
        </TranslateExample>
        <TranslateExample title="Dots">
          <Dots />
        </TranslateExample>
        <TranslateExample title="Flower">
        </TranslateExample>
        <TranslateExample title="Web">
        </TranslateExample>
        <TranslateExample title="Keyboard">
        </TranslateExample>
      </main>
    </div>
  );
}

export default App;
