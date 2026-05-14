import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 mt-3 sticky top-0 z-50 font-bold ">
    
      <h1 className="text-4xl font-bold text-blue-800 hover:text-blue-600 transition-colors cursor-pointer">
        JobConnect
      </h1>
      <div className="flex justify-around items-center  bg-blue-300 rounded-full  text-lg px-6 py-1.5 gap-7">
        <p className="">Features</p>
        <p className="">Job</p>
        <p className="">Our Partners</p>
        <p className="">About us</p>
      </div>

      <div className="flex items-center gap-4 text-lg">
        
        <Link
          href="/login"
          className=" text-blue border-b-blue-950 hover:"
        >
          <button className="px-10 py-2 rounded-lg bg-blue-700 text-white hover-text-yellow cursor-pointer ">
            Login
          </button>
        </Link>

        <Link href="/register" className="flex items-center gap-4">
          <button className="px-10 py-2 rounded-lg text-black hover:text-yellow-600 cursor-pointer">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
