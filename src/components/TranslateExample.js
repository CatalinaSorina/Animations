import React from "react";
import { DIV } from "./styles";

const TranslateExample = ({ title, children }) => {
  return (
    <DIV>
      <h3>{title}</h3>
      {children}
    </DIV>
  );
};

export default TranslateExample;
