import React, { useState } from "react";
import FunctionMouseHook from "./FunctionMouseHook";
import ClassMouse from "./ClassMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  const handleToggleDisplay = () => {
    setDisplay((display) => !display);
  };

  return (
    <div>
      <button onClick={handleToggleDisplay}> Click To Toggle Display</button>
      <hr />
      {display && <FunctionMouseHook />}
      <br /><hr /> <br />
      {display && <ClassMouse />}
    </div>
  );
}

export default MouseContainer;
