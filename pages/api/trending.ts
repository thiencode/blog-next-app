import data from "./data"


// api/trending
export default function handler(rep, res) {
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending)
  res.status(404).json({ error: "Data Not Found" })
}