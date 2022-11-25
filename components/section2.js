import Image from "next/image"
import Link from 'next/link'
import Fetcher from "../lib/fetcher"
import Author from "./_child/author"
import Spinner from './_child/spinner'
import Error from "./_child/error"

export default function Section2() {

  const { data, isLoading, isError } = Fetcher('api/posts');
  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* Grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
          data.map((value, index) => (
            <Post data={value} key={index}></Post>
          ))
        }
      </div>
    </section >
  )
}

function Post({ data }) {
  const { id, title, category, img, published, description, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} className="rounded" width={500} height={350} alt="ANH 1" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}><span className="text-orange-600 hover:text-orange-700">{category || "Unknown"}</span></Link>
          <Link href={`/posts/${id}`}><span className="text-gray-800 hover:text-gray-600"> - {published || "Unknown"}</span></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}><span className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</span></Link>
        </div>
        <p className="text-gray-500 py-3">{description || "Unknown"}</p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  )
}