import React from "react";
import styled, { keyframes } from "styled-components";

const translate = (
  translate0,
  translate30,
  translate60,
  translate100
) => keyframes`
    0% {
        transform: translate(${translate0});
    }
    30% {
        transform: translate(${translate30});
    }
    60% {
        transform: translate(${translate60});
    }
    100% {
        transform: translate(${translate100});
    }
`;

const scale = (scale0, scale50, scale100) => keyframes`
    0% {
        transform: scale(${scale0});
    }
    50% {
        transform: scale(${scale50});
    }
    100% {
        transform: scale(${scale100});
    }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 1rem;
  padding: 0;
  background: transparent;
  border-radius: 1rem;
`;

const Dot = styled.div`
  border-radius: 50%;
  border: 0.05rem solid white;
  width: 1rem;
  height: 1rem;
  margin: 0.3rem;
  background: ${({ color }) => (color ? color : "white")};
  animation-name: ${({ motion }) => motion};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const Dots = ({ loading = true, color }) =>
  loading && (
    <Wrapper>
      <Dot
        color={color ? color : "white"}
        motion={() => translate("0", "2rem,-2rem", "4rem", "2rem,2rem")}
      />
      <Dot
        color={color ? color : "rgba(255,255,255,0.8)"}
        motion={()=>scale(0.5,0.75,0.85)}
      />
      <Dot
        color={color ? color : "rgba(255,255,255,0.5)"}
        motion={() => translate("0", "-2rem,2rem", "-4rem", "-2rem,-2rem")}
      />
    </Wrapper>
  );

export default Dots;
