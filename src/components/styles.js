import styled, { keyframes, css } from "styled-components";

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 15rem;
`;

export const Title = styled.h3`
  cursor: pointer;
  text-align: left;
`;

export const SquareHolder = styled.div`
  display: flex;
`;

export const RoundedSquare = styled.div`
  border-radius: 1rem;
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.5);
  margin: 0.5rem;
  ${({ animation, time, delay, type }) =>
    animation &&
    css`
      animation: ${getAnimation(animation)} ${time ? time : "1s"}
        ${delay ? delay : "0.1s"} infinite ${type ? type : "alternate"};
    `}
`;

const skew = keyframes`
    0% {
        transform: skew(30deg,30deg);
        border:0.1rem solid rgba(255,255,255,0.5);
    }
    50% {
        transform: skew(0deg,0deg);
        background:rgba(255,255,255,0.5);
    }
    100% {
        transform: skew(-30deg,-30deg);
        background:white;
    }
`;

const rotate = keyframes`
    0% {
        transform: rotate(30deg);
        border:0.1rem solid rgba(255,255,255,0.5);
    }
    50% {
        transform: rotate(0deg);
        background:rgba(255,255,255,0.5);
    }
    100% {
        transform: rotate(-30deg);
        background:white;
    }
`;

const scale = keyframes`
    0% {
        transform: scale(1);
        background:white;
    }
    50% {
        transform: scale(0.5);
        background:rgba(255,255,255,0.5);
    }
    100% {
        transform: scale(0.25);
        border:0.1rem solid rgba(255,255,255,0.5);
    }
`;

const matrix = keyframes`
    0% {
        transform: matrix(0.5, 0.5, -0.5, 0.5, -0.5, 25);
        background:white;
    }
    50% {
        transform: matrix(0.8, 0.8, -0.8, 0.8, -0.8, 30);
        background:rgba(255,255,255,0.5);
    }
    100% {
        border:0.1rem solid rgba(255,255,255,0.5);
    }
`;

const translate = keyframes`
    0% {
        transform: translate(1rem,1rem);
        background:white;
    }
    50% {
        transform: translate(-1rem,0rem);
        background:rgba(255,255,255,0.5);
    }
    100% {
        transform: translate(0rem,-1rem);
        border:0.1rem solid rgba(255,255,255,0.5);
    }
`;

const getAnimation = (name) => {
  switch (name) {
    case "skew":
      return skew;
    case "rotate":
      return rotate;
    case "scale":
      return scale;
    case "matrix":
      return matrix;
    case "translate":
      return translate;
    default:
      return skew;
  }
};

export const ConfettiHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const ConfettiButton = styled.button`
  outline: none;
  color: grey;
  font-family: Cursive;
  width: 4rem;
  height: 1.5rem;
  border-radius: 0.2rem;

  &:active {
    box-shadow: 0 0 0 rgba(42, 27, 24, 0.8);
  }
`;

export const configConfetti = {
  angle: "140",
  spread: "80",
  startVelocity: 280,
  elementCount: 1000,
  dragFriction: "0.29",
  duration: "2800",
  stagger: "5",
  width: "0.5rem",
  height: "0.7rem",
  colors: ["#FF2D00", "#FFA200", "#FFFC43","#FF1C42", "#FBFF00","#B9FF00","#172830","#00FF64","#00ECFF","#008BFF"]
};
