import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function header() {
  return (
    <header>
      <div className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <input type="text" placeholder="Search..." className="mt-1 block w-60 px-3 py-2 bg-white border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500" />
          </div>
          <div className="shrink w-80 sm:order-2 flex justify-center">
            <Link href={"/"}>
              <span className="font-bold uppercase text-3xl">Design</span>
            </Link>
          </div>
          <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-6">
              <Link href={"/"}><span><ImFacebook color="#888888" /></span></Link>
              <Link href={"/"}><span><ImTwitter color="#888888" /></span></Link>
              <Link href={"/"}><span><ImYoutube color="#888888" /></span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}