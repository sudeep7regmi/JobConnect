"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-4 px-6 md:px-12 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      {/* LOGO */}
      <div className="flex items-center">
        <Link
          href="#homepage"
          className="block transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <Image
              src="https://play-lh.googleusercontent.com/HfzS1VK6OVbr85qiJPmnfcmzTvGnlZ1WyBwA6rpiWJyzvw2rnWkzDmotT1K44vkiBQ"
              alt="JobConnect Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>
      </div>

      {/* MIDDLE NAVIGATION MENU */}
      <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/40 dark:border-slate-800/40 font-medium text-sm text-slate-600 dark:text-slate-300">
        <Link
          href="#features"
          className="px-5 py-2 rounded-full hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
        >
          Features
        </Link>
        <Link
          href="#featuredJobs"
          className="px-5 py-2 rounded-full hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
        >
          Jobs
        </Link>
        <Link
          href="#ourPartners"
          className="px-5 py-2 rounded-full hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
        >
          Our Partners
        </Link>
        <Link
          href="#about"
          className="px-5 py-2 rounded-full hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
        >
          About Us
        </Link>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center gap-3 font-semibold text-sm">
        <Link href="/login">
          <button className="px-5 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200">
            Log In
          </button>
        </Link>

        <Link href="/register" >
          <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 shadow-sm shadow-blue-600/10 hover:shadow-md hover:shadow-blue-600/20 active:scale-98">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
