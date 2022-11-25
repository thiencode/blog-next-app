import Image from "next/image";

export default function Error() {
  return (
    <div className="text-center items-center py-10">
      <h1 className="text-3xl font-bold text-orange-600 py-10">Something went wrong</h1>
      <Image src={"/images/NOT_FOUND.png"} width={400} height={400} className="w-[600px] mx-auto" />
    </div>
  )
}