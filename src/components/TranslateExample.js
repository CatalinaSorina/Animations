import React, { useState } from "react";
import { DIV,Title } from "./styles";

const TranslateExample = ({ title, children }) => {
  const [showChild, setShowChild] = useState(false);
  return (
    <DIV>
      <Title
        onClick={() => (showChild ? setShowChild(false) : setShowChild(true))}
      >
        {title}
      </Title>
      {showChild && children}
    </DIV>
  );
};

export default TranslateExample;
