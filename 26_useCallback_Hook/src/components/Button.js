import React from "react";

function Button({ handleClick, children }) {
  console.log(`Redenring button - ${children}\n`);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);

// React.memo is a Higher Order Component (HOC)
// that prevent a functionnal to re-render if
// its props or state does not change.
