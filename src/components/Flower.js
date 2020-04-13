import React from "react";
import styled, { keyframes } from "styled-components";

const opacity = (
  opacity0,
  opacity25,
  opacity50,
  opacity75,
  opacity100
) => keyframes`
    0% {
        opacity:${opacity0};
    }
    25% {
        opacity:${opacity25};
    }
    50% {
        opacity:${opacity50};
    }
    75% {
        opacity:${opacity75};
    }
    100% {
        opacity:${opacity100};
    }
`;

const rotate = (grade100) => keyframes`
    100% {
        transform: rotate(${grade100});
    }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  margin: 1rem;
  padding: 0;
  background: transparent;
  width: 6rem;
  height: 6rem;
  animation-name: ${() => rotate("360deg")};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const Dot = styled.div`
  justify-self: center;
  border-radius: 50%;
  border: 0.05rem solid white;
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ color }) => (color ? color : "white")};
  grid-area: 3/2;
`;

const Petal = styled.div`
  justify-self: center;
  border-radius: 50%;
  border: 0.05rem solid white;
  width: 0.5rem;
  height: 1.2rem;
  background: ${({ color }) => (color ? color : "white")};
  grid-area: ${({ position }) => position};
  ${({ rotate }) => rotate && `transform: rotate(${rotate});`};
  animation-name: ${() => opacity(1, 0.25, 0.5, 0.75, 1)};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const Flower = ({ loading = true, color, middleColor }) =>
  loading && (
    <Wrapper>
      <Petal color={color} position="1/2" />
      <Petal color={color} position="2/1" rotate="-60deg" />
      <Petal color={color} position="2/3" rotate="60deg" />
      <Dot color={middleColor} />
      <Petal color={color} position="5/2" />
      <Petal color={color} position="4/1" rotate="60deg" />
      <Petal color={color} position="4/3" rotate="-60deg" />
    </Wrapper>
  );
export default Flower;
