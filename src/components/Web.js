import React from "react";
import styled, { keyframes } from "styled-components";

const opacity = (opacity75) => keyframes`
    0% {
        clip-path: polygon(54% 15%, 94% 8%, 86% 22%, 85% 35%, 94% 90%, 53% 83%, 9% 88%, 25% 50%, 26% 40%, 12% 11%);
    }
    25% {
        clip-path: polygon(54% 15%, 94% 8%, 89% 35%, 85% 67%, 94% 90%, 53% 83%, 9% 88%, 21% 64%, 19% 29%, 12% 11%);
    }
    50% {
        clip-path: polygon(54% 26%, 94% 8%, 82% 36%, 83% 57%, 94% 90%, 53% 76%, 9% 88%, 31% 49%, 31% 41%, 12% 11%);
    }
    75% {
        opacity:${opacity75};
        clip-path: polygon(53% 17%, 94% 8%, 87% 35%, 88% 60%, 94% 90%, 52% 84%, 9% 88%, 23% 61%, 21% 39%, 12% 11%);
    }
    100% {
        clip-path: polygon(54% 15%, 94% 8%, 89% 39%, 88% 61%, 94% 90%, 53% 83%, 9% 88%, 18% 60%, 21% 42%, 12% 11%);
    }
`;

const translate = (
  translate0,
  translate25,
  translate50,
  translate75,
  translate100
) => keyframes`
    0% {
        transform: translate(${translate0});
    }
    25% {
         transform: translate(${translate25});
    }
    50% {
         transform: translate(${translate50});
    }
    75% {
         transform: translate(${translate75});
    }
    100% {
         transform: translate(${translate100});
    }
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
  padding: 0;
  background: transparent;
  width: 10rem;
  height: 10rem;
`;

const Spider = styled.div`
  position: relative;
  justify-self: center;
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  background: ${({ color }) => (color ? color : "black")};
  z-index: 1;
  animation-name: ${() =>
    translate("1rem", "3rem,5rem", "8rem,7rem", "8rem,3rem", "1rem")};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const SpiderFeet = styled.div`
  position: absolute;
  font: 1rem Cursive;
  color: black;
  top: -0.7rem;
  left: -0.15rem;
  ${({ rotate }) => rotate && `transform:rotate(${rotate})`}
`;

const Site = styled.div`
  display: flex;
  align-self: center;
  margin: auto;
  position: relative;
  width: ${({ size }) => (size ? size : "3rem")};
  height: ${({ size }) => (size ? size : "3rem")};
  clip-path: polygon(
    54% 15%,
    94% 8%,
    89% 39%,
    88% 61%,
    94% 90%,
    53% 83%,
    9% 88%,
    18% 60%,
    21% 42%,
    12% 11%
  );
  box-shadow: inset 0.1rem 0.1rem
    ${({ shadow }) => (shadow ? shadow : "0.3rem")} white;
  animation-name: ${() => opacity(0.75)};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const SiteLine = styled.hr`
  position: absolute;
  top: 3rem;
  left: -0.7rem;
  width: 12rem;
  height: 0.1rem;
  border-radius: 1rem;
  border-width: 0.1rem 0 0 0;
  border-color: rgba(255, 255, 255, 0.2);
  ${({ rotate }) => rotate && `transform: rotate(${rotate});`}
  z-index: 3;
`;

const Web = ({ loading = true, color, spiderColor }) =>
  loading && (
    <Wrapper>
      <Spider color={spiderColor}>
        <SpiderFeet>x</SpiderFeet>
        <SpiderFeet rotate="35deg">x</SpiderFeet>
      </Spider>
      <SiteLine rotate="44deg" />
      <Site color={color} size="8rem" shadow="1.4rem">
        <Site color={color} size="5rem" shadow="1rem">
          <Site color={color} size="3rem" shadow="0.8rem">
            <Site color={color} size="1rem"></Site>
          </Site>
        </Site>
      </Site>
      <SiteLine rotate="-44deg" />
    </Wrapper>
  );
export default Web;
