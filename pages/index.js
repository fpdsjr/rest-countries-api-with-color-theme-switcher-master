import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function Home({ list }) {
  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <section>
      <Header />
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
