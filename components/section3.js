import Image from "next/image"
import Link from 'next/link'
import Fetcher from "../lib/fetcher"
import Author from "./_child/author"
import Spinner from './_child/spinner'
import Error from "./_child/error"
// Import swiper
import { Swiper, SwiperSlide } from "swiper/react"

export default function section3() {

  const { data, isLoading, isError } = Fetcher('api/popular');
  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/* swiper */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }}
      >
        {
          data.map((value, index) => (
            <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

function Post({ data }) {
  const { id, title, category, img, published, description, author } = data;
  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} width={600} height={400} alt="ANH 1" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}><span className="text-orange-600 hover:text-orange-700">{category || "Unknown"}</span></Link>
          <Link href={`/posts/${id}`}><span className="text-gray-800 hover:text-gray-600"> - {published || "Unknown"}</span></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}><span className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</span></Link>
        </div>
        <p className="text-gray-500 py-3">{description || "Unknown"}</p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  )
}