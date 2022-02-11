export default async function handler(req, res) {
  const request = await fetch("https://restcountries.com/v3.1/all");
  const result = await request.json();

  res.status(200).json({
    list: result,
  });
}
