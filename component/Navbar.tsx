import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 sticky top-0 z-50 font-bold ">
      <div className="bg-white p-4 rounded-full hover:scale-120 transition">
        <Image
          src="https://play-lh.googleusercontent.com/HfzS1VK6OVbr85qiJPmnfcmzTvGnlZ1WyBwA6rpiWJyzvw2rnWkzDmotT1K44vkiBQ"
          alt="JobConnect Logo"
          width={90}
          height={90}
          className="rounded-lg"
        />
      </div>
      <div className="hidden md:flex justify-around items-center  bg-blue-300 rounded-full  text-lg px-10 py-3 gap-10">
       <Link href="#features"> <p className="">Features</p></Link>
        <p className="">Job</p>
        <p className="">Our Partners</p>
        <p className="">About us</p>
      </div>

      <div className="flex items-center text-lg ">
        <Link href="/login" className=" text-blue border-b-blue-950 hover:scale-110">
          <button className="px-10 py-2 rounded-lg bg-blue-700 text-white hover-text-yellow cursor-pointer ">
            Login
          </button>
        </Link>

        <Link href="/register" className="flex items-center gap-4">
          <button className="px-10 py-2 rounded-lg text-black hover:text-yellow-600 hover:scale-110 cursor-pointer">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
