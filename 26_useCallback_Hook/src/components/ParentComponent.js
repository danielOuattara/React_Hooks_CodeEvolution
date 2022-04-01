import { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";


/*
useCallback is a React hook. Used on callback functions.
It will return a memoized version of the callback that 
change only if one of callback's dependencies changes

Useful for unnecessary renders of callback passed in components
from a parent component 
*/

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

//   const incrementAge = () => {
//     setAge(age + 1);
//   };
   const incrementAge =  useCallback(
      () => {
          setAge(age + 1);
      },
      [age],
    )

  const incrementSalary = () => {
    setSalary(salary + 1000);
  };
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>
        Increment age
      </Button>
      <br /> <br />
      <Count text="Salary" count={salary} />
      <Button handleClick={useCallback(incrementSalary, [salary])}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
