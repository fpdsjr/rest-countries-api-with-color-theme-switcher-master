import Image from "next/image";

export default function Home({ list }) {
  console.log(list.list);
  return <ul></ul>;
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/contries");
  const result = await res.json();
  return {
    props: {
      list: result.list,
    },
  };
}
