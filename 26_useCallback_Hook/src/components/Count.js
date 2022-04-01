import React from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}\n`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Count);

// React.memo is a Higher Order Component (HOC)
// that prevent a functionnal to re-render if
// its props or state does not change.