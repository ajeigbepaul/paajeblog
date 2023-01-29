import Link from "next/link"
// import Image from "next/image"
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-5 font-bold">
        <div className="flex items-center">
            <Link href="/">
            <h2>PAAGEBLOG</h2>
                {/* <Image src="logo.png" width={50} height={50} alt="logo" className="rounded-full"/> */}
            </Link>
            {/* <h2>PAAGEBLOG</h2> */}
        </div>
        <div>
        <Link href="/" className="px-5 py-3 md:text-base bg-gray-700 text-[#f7ab0a] flex items-center rounded-full text-center">
        Check out my portfolio
        </Link>
        </div>
    </header>
  )
}

export default Header