import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { ThemeProvider } from "styled-components";
import { light } from "../../themes/light";
import { dark } from "../../themes/dark";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Container, CountryInfosSection } from "./countriesStyles.js/Container";
import { ContentContainer } from "./countriesStyles.js/ContentContainer";
import {
  CountryInfos,
  SecondoryInfos,
} from "./countriesStyles.js/CountryInfos";

export default function Country({ country }) {
  const [countryInfo] = country;
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const router = useRouter();

  const {
    name,
    nativeName,
    population,
    region,
    subegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flags,
  } = countryInfo;

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <button onClick={() => router.push("/")}> Back</button>
        <ContentContainer>
          <Image
            src={flags.png}
            alt="flag img"
            width={560}
            height={400}
            loader={myLoader}
          />

          <CountryInfosSection>
            <h1>{name}</h1>
            <CountryInfos>
              <div>
                <p>
                  <span>Native Name: </span>
                  {nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {population}
                </p>
                <p>
                  <span>Region: </span>
                  {region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {subegion}
                </p>
                <p>
                  <span>Capital: </span>
                  {capital}
                </p>
              </div>
              <SecondoryInfos>
                <p>
                  <span>Top Level Domain: </span>
                  {topLevelDomain}
                </p>
                <p>
                  <span>Currencies: </span>
                  {currencies[0].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {languages.map((l) => l.name).join(", ")}
                </p>
              </SecondoryInfos>
            </CountryInfos>
            <div>
              <p>
                <span>Border Countries: </span>{" "}
                {borders.map((b) => b).join(" ")}
              </p>
            </div>
          </CountryInfosSection>
        </ContentContainer>
      </Container>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/countries/${context.params.id}`
  );
  const result = await res.json();

  return {
    props: {
      country: result.country,
    },
  };
}
