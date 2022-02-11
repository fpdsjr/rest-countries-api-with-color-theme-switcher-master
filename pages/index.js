import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "../themes/light";
import { dark } from "../themes/dark";
import { useState } from "react";

export default function Home({ list }) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <section>
        <Header toggleTheme={toggleTheme} />
        {list.map(({ country, population, region, capital, flag }) => (
          <div key={country}>
            <ul>
              <Link passHref href={`/countries/${country}`}>
                <Image
                  src={flag}
                  alt="flag img"
                  width={200}
                  height={100}
                  loader={myLoader}
                />
              </Link>
              <li>Name: {country}</li>
              <li>Population: {population}</li>
              <li>Region: {region}</li>
              <li>Capital: {capital}</li>
            </ul>
          </div>
        ))}
        <GlobalStyles />
      </section>
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
