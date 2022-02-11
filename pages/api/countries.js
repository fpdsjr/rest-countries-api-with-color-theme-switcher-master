export default async function handler(req, res) {
  const request = await fetch("https://restcountries.com/v3.1/all");
  const result = await request.json();

  const countryInfos = [];

  result.map(({ name, flags, population, region, capital }) => {
    let obj = {
      country: name.common,
      flag: flags.png,
      population,
      region,
      capital,
    };

    countryInfos.push(obj);
  });

  res.status(200).json({
    list: countryInfos,
  });
}
