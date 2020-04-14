import React from "react";
import "./App.css";
import Typing from "react-typing-animation";
import TranslateExample from "./components/TranslateExample";
import RoundedSquares from "./components/RoundedSquares";
import Cross from "./components/Cross";
import Dots from "./components/Dots";
import Flower from "./components/Flower";
import Web from "./components/Web";
import Keyboard from "./components/Keyboard";
import {
  ConfettiHolder,
  ConfettiButton,
  configConfetti,
} from "./components/styles";
import { useState } from "react";
import Confetti from "react-dom-confetti";

function App() {
  const [esc, setEsc] = useState(false);

  return (
    <div className="App">
      <Typing speed={100}>
        <h2>Animations</h2>
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
      <ConfettiHolder>
        <Typing speed={200}>
          <h3>Loaders</h3>
        </Typing>
        <ConfettiButton onClick={() => (esc ? setEsc(false) : setEsc(true))}>
          <Confetti active={esc} config={configConfetti} />
          Esc
        </ConfettiButton>
      </ConfettiHolder>
      <main>
        <TranslateExample title="Cross">
          <Cross
            colors={[
              "rgba(255,255,255,0.5)",
              "rgba(255,255,255,0.25)",
              "rgba(255,255,255,1)",
              "rgba(255,255,255,0.75)",
            ]}
          />
        </TranslateExample>
        <TranslateExample title="Dots">
          <Dots />
        </TranslateExample>
        <TranslateExample title="Flower">
          <Flower />
        </TranslateExample>
        <TranslateExample title="Web">
          <Web />
        </TranslateExample>
        <TranslateExample title="Keyboard">
          <Keyboard />
        </TranslateExample>
      </main>
    </div>
  );
}

export default App;
