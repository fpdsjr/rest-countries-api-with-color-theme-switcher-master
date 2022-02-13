import React, { useEffect } from "react";

function BorderCountry({ borders }) {
  return (
    <>
      <p>
        <span>Border Countries: </span>{" "}
        {borders ? borders.map((b) => b).join(" ") : "none"}
      </p>
    </>
  );
}

export default BorderCountry;
