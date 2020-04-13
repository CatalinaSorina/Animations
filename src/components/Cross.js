import React from "react";
import styled, { keyframes } from "styled-components";

const motion = ({ position }) => keyframes`
    0% {
        grid-area: ${moveOn(position + 2)};
    }
    30% {
        transform: scale(0.5);
        grid-area: ${moveOn(position + 3)};
    }
    60% {
        transform: scale(0.75);
        grid-area: ${moveOn(position + 4)};
    }
    100% {
        grid-area: ${moveOn(position + 5)};
    }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  margin: 1rem;
  padding: 0;
  width: 7rem;
  height: 7rem;
  background: transparent;
  border-radius: 1rem;
`;

const Line = styled.div`
  grid-area: ${({ position }) => moveOn(position + 1)};
  width: ${({ position }) => setLine(position + 1)};
  height: ${({ position }) => setLine(position + 2)};
  justify-self:center;
  border-radius: 1rem;
  border:0.05rem solid white;
  background: ${({ color, colors, colorIndex }) => color? color:colors[selectFrom(colors,colorIndex)]};
  animation-name: ${motion};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const setLine = (position)=>{
    switch (position) {
    case "TOP1": return "1rem";
    case "TOP2": return "2rem";
    case "BOTTOM1": return "1rem";
    case "BOTTOM2": return "2rem";
    case "LEFT1": return "2rem";
    case "LEFT2": return "1rem";
    case "RIGHT1": return "2rem";
    case "RIGHT2": return "1rem";
    default: return "2rem";
  }
};

const moveOn = (position) => {
  switch (position) {
    case "TOP1": return "1/3";
    case "TOP2": return "2/3";
    case "TOP3": return "3/3";
    case "TOP4": return "2/3";
    case "TOP5": return "1/3";
    case "BOTTOM1": return "5/3";
    case "BOTTOM2": return "4/3";
    case "BOTTOM3": return "3/3";
    case "BOTTOM4": return "4/3";
    case "BOTTOM5": return "5/3";
    case "LEFT1": return "3/1";
    case "LEFT2": return "3/2";
    case "LEFT3": return "3/3";
    case "LEFT4": return "3/2";
    case "LEFT5": return "3/1";
    case "RIGHT1": return "3/5";
    case "RIGHT2": return "3/4";
    case "RIGHT3": return "3/3";
    case "RIGHT4": return "3/4";
    case "RIGHT5": return "3/5";
    default: return "3/3";
  }
};

const selectFrom = (colors, index) =>
  colors.length > index ? index : Math.abs(index % colors.length);

const Cross = ({
  loading = true,
  color,
  colors,
}) =>
  loading && (
    <Wrapper>
      {["TOP", "LEFT", "BOTTOM", "RIGHT"].map((val, i) => (
        <Line
          color={color}
          colors={colors}
          position={val}
          colorIndex={i}
        />
      ))}
    </Wrapper>
  );

export default Cross;
