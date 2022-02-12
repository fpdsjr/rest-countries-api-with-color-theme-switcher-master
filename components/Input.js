import React from "react";

function Input({ inputValue, setInputValue }) {
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search for a country..."
    ></input>
  );
}

export default Input;
