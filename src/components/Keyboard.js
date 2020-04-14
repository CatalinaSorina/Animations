import React from "react";
import styled, { keyframes } from "styled-components";

const shadow = keyframes`
    25% {
        filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.5));
    }
    50% {
        filter: drop-shadow(-0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.5));
    }
    75% {
        filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.5));
    }
    100% {
        filter: drop-shadow(-0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.5));
    }
`;

const clicking = keyframes`
    25% {
        box-shadow: 0 0.05rem 0.1rem white;
    }
    50% {
        box-shadow: 0 0.2rem 0.3rem white;
    }
    75% {
        box-shadow: 0 0.05rem 0.1rem white;
    }
    100% {
        box-shadow: 0 0.2rem 0.3rem white;
    }
`;

const scale = keyframes`
    25% {
        transform: scale(0.8);
    }
    50% {
        transform: scale(1);
    }
    75% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
`;

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  filter: drop-shadow(-0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.5));
  animation: ${shadow} 1.5s infinite;
`;

const Button = styled.button`
  position: relative;
  width: inherit;
  height: inherit;
  background: white;
  outline: none;
  border-radius: 1rem;
  border: none;
  box-shadow: 0.4rem 0.7rem 0.8rem white;
  animation: ${clicking} 1.5s infinite, ${scale} 1.5s infinite;
  clip-path: polygon(56% 19%, 96% 19%, 94% 93%, 18% 92%, 19% 59%, 52% 58%, 54% 56%);
`;

const TextButton = styled.h4`
  position:absolute;  
  color: ${({ color }) => (color ? color : "#2E487C")};
  font-family: "Indie Flower", cursive;
  font-size: 1.3rem;
  left:3rem;
  top:4.5rem;
  font-weight: lighter;
`;

const Keyboard = ({ loading = true, color, text }) =>
  loading && (
    <Wrapper>
      <Button>
        <TextButton color={color}>{text ? text : "Entering ↩"}</TextButton>
      </Button>
    </Wrapper>
  );
export default Keyboard;
