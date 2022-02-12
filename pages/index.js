import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Input from "../components/Input";
import Select from "../components/Select";
import { Container } from "../styles/Container";
import { GlobalStyles } from "../styles/GlobalStyles";
import {
  CardContainer,
  Card,
  ImageWrapper,
  InfoCardContainer,
} from "../styles/CardContainer";
import {
  OptionsContainer,
  SearchIconWrapper,
} from "../styles/OptionsContainer";
import { ThemeProvider } from "styled-components";
import { light } from "../themes/light";
import { dark } from "../themes/dark";
import { useState } from "react";
import searchIcon from "../public/assets/search.svg";

export default function Home({ list }) {
  const [theme, setTheme] = useState(light);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  console.log(selectValue);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <OptionsContainer>
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <SearchIconWrapper>
            <Image src={searchIcon} width="20" height="20" alt="text" />
          </SearchIconWrapper>
          <Select selectValue={selectValue} setSelectValue={setSelectValue} />
        </OptionsContainer>
        <CardContainer>
          {list
            .filter(({ region }) =>
              region.toLowerCase().includes(selectValue.toLowerCase())
            )
            .filter(({ country }) => {
              return country.toLowerCase().includes(inputValue.toLowerCase());
            })
            .map(({ country, population, region, capital, flag }) => (
              <Card key={country}>
                {/* <Link
                className="image-wrapper"
                passHref
                href={`/countries/${country}`}
              > */}
                <ImageWrapper>
                  <Image
                    src={flag}
                    alt="flag img"
                    width={264}
                    height={160}
                    loader={myLoader}
                  />
                </ImageWrapper>
                {/* </Link> */}
                <InfoCardContainer>
                  <h1>{country}</h1>
                  <li>
                    <span>Population:</span> {population.toFixed(2)}
                  </li>
                  <li>
                    <span>Region:</span> {region}
                  </li>
                  <li>
                    <span>Capital:</span> {capital}
                  </li>
                </InfoCardContainer>
              </Card>
            ))}
        </CardContainer>
        <GlobalStyles />
      </Container>
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/countries");
  const result = await res.json();
  return {
    props: {
      list: result.list,
    },
  };
}
