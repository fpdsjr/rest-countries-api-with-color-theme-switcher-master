import React from "react";

function Header({ toggleTheme }) {
  return (
    <div>
      <h2>Where in the World? </h2>
      <div>
        <button
          onClick={() => {
            toggleTheme();
          }}
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export default Header;
