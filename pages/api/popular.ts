import data from "./data"

// api/popular
export default function handler(rep, res) {
  const { Popular } = data;
  if (Popular) return res.status(200).json(Popular)
  res.status(404).json({ error: "Data Not Found" })
}