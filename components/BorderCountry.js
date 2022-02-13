import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BorderCountryButton } from "./BorderCountrystyle";

function BorderCountry({ borders }) {
  const [boardersCountries, setBoardersCountries] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetchApiCountry();
  }, []);

  const fetchApiCountry = async () => {
    if (borders) {
      const string = borders.join(",");
      const boardersCountries = await fetch(
        `https://restcountries.com/v2/alpha?codes=${string}`
      );
      const result = await boardersCountries.json();
      const boardersCountriesNames = result.map((country) => country.name);
      setBoardersCountries(boardersCountriesNames);
    }
  };

  const buttonRender = () => {
    return boardersCountries.map((country) => (
      <BorderCountryButton
        key={country}
        type="submit"
        onClick={() => router.push(`/countries/${country}`)}
      >
        {country}
      </BorderCountryButton>
    ));
  };

  return (
    <>
      <p>
        <span>Border Countries:</span>{" "}
        {boardersCountries ? buttonRender() : null}
      </p>
    </>
  );
}

export default BorderCountry;
