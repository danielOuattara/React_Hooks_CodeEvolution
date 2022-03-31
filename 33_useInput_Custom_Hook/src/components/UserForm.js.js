import React from "react";
import useInput from "../hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Hello ${firstName} ${lastName}`);
    resetFirstName()
    resetLastName()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">
          FirstName&nbsp;:&nbsp;
          <input type="text" {...bindFirstName} />
        </label>
      </div>
      <div>
        <label htmlFor="">
          LastName&nbsp;:&nbsp;
          <input type="text" {...bindLastName} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
