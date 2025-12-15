import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function updateName(event) {
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName };
      } else if (name === "lName") {
        return { fName: prevValue.fName, lName: value };
      }
    });
  }

  const [finalName, setName] = useState("");
  function handleClick(event) {
    setName(fullName.fName + " " + fullName.lName);

    event.preventDefault();
  }

  const [isOver, setOver] = useState(false);
  function handleOver() {
    setOver(true);
  }
  function handleOut() {
    setOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {finalName}</h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={updateName}
          value={fullName.fname}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={updateName}
          value={fullName.lname}
        />
        <button
          type="submit"
          onMouseOver={handleOver}
          onMouseOut={handleOut}
          style={{ backgroundColor: isOver ? "black" : "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
