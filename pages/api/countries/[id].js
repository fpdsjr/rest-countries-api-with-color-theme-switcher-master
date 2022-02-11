export default async function handler(req, res) {
  const countrySearch = await fetch(
    `https://restcountries.com/v2/name/${req.query.id}`
  );
  const countryInfo = await countrySearch.json();

  res.status(200).json({
    country: countryInfo,
  });
}
