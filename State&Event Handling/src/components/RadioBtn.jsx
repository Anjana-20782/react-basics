import React from "react";

import { useState } from "react";

function RadioDemo() {
  const [choice, setChoice] = useState("A");

  return (
    <>
      <input type="radio" value="A" checked={choice === "A"} onChange={(e) => setChoice(e.target.value)}/> A

      <input type="radio" value="B" checked={choice === "B"} onChange={(e) => setChoice(e.target.value)} />
      B
    </>
  );
}

export default RadioDemo;
