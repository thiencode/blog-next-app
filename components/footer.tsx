import Link from 'next/link'
import Newslatter from "./_child/newslatter";

// Import React icon
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";


export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}><span><ImFacebook color="#888888" /></span></Link>
            <Link href={"/"}><span><ImTwitter color="#888888" /></span></Link>
            <Link href={"/"}><span><ImYoutube color="#888888" /></span></Link>
          </div>
          <p className="py-5 text-gray-400">Copyright @2022 All rights reserved | This template is made by Thien</p>
          <p className="text-gray-4 text-center">Temp & Condition</p>
        </div>
      </div>

    </footer>
  )
}