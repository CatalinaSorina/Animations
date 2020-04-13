import React from "react";
import { SquareHolder, RoundedSquare } from "./styles";

const RoundedSquares = ({ animation, time, delay, type }) => (
  <SquareHolder>
    <RoundedSquare
      animation={animation}
      time={time}
      delay={delay}
      type={type}
    />
    <RoundedSquare
      animation={animation}
      time={time}
      delay={delay}
      type={type}
    />
    <RoundedSquare
      animation={animation}
      time={time}
      delay={delay}
      type={type}
    />
  </SquareHolder>
);

export default RoundedSquares;
