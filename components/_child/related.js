import Image from "next/image"
import Link from 'next/link'
import Fetcher from "../../lib/fetcher";
import data from "../../pages/api/data"
import Author from "./author"
import Error from "./error";
import Spinner from "./spinner";

export default function Ralated() {

  const { data, isLoading, isError } = Fetcher('api/posts');
  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>

      <div className="flex flex-col gap-10">
        {
          data.map((value, index) => (
            <Post key={index} data={value} />
          ))
        }
      </div>
    </section >
  )
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image src={img || ""} className="rounded" width={500} height={250} alt="ANH 1" />
        </Link>
      </div>
      <div className="info justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`}><span className="text-orange-600 hover:text-orange-700">{category || "No category"}</span></Link>
          <Link href={`/posts/${id}`}><span className="text-gray-800 hover:text-gray-600"> - {published || ""}</span></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}><span className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "No title"}</span></Link>
        </div>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  )
}