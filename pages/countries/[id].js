import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import BorderCountry from "../../components/BorderCountry";
import Header from "../../components/Header";
import { ThemeProvider } from "styled-components";
import { light } from "../../themes/light";
import { dark } from "../../themes/dark";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Container, CountryInfosSection } from "./countriesStyles.js/Container";
import {
  ContentContainer,
  FlagContainer,
  ArrowContainer,
} from "./countriesStyles.js/ContentContainer";
import {
  CountryInfos,
  SecondoryInfos,
  BorderInfo,
} from "./countriesStyles.js/CountryInfos";
import leftArrow from "../../public/assets/arrow-left-solid.svg";

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
    subregion,
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
        <ContentContainer>
          <FlagContainer>
            <button type="button" onClick={() => router.push("/")}>
              <p>Back</p>
            </button>
            <ArrowContainer>
              <Image src={leftArrow} alt="arrow img" width={16} height={16} />
            </ArrowContainer>
            <Image
              src={flags.png}
              alt="flag img"
              width={560}
              height={400}
              loader={myLoader}
            />
          </FlagContainer>

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
                  {population.toLocaleString("en-US")}
                </p>
                <p>
                  <span>Region: </span>
                  {region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {subregion}
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
            <BorderInfo>
              <BorderCountry borders={borders} />
            </BorderInfo>
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
