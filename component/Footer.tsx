import Link from "next/link";
export default function Footer(){
    return(
        <footer id="footer"className=" flex relative bg-black text-white py-20 ">

        <div className="max-w-7xl mx-auto px-6">
      
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      
            {/* BRAND */}
            <div>
              <h2 className="text-2xl font-bold text-blue-500">
                JobConnect
              </h2>
      
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                A modern job platform connecting talent with opportunity faster, smarter, and better.
              </p>
            </div>
      
            
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Quick Links
              </h3>
      
              <ul className="space-y-2 text-gray-400 text-sm">
                <Link href="#homePage"><li className="hover:text-white cursor-pointer p-2">🏠 Home</li></Link>
                <Link href="#featuredJobs"><li className="hover:text-white cursor-pointer p-1.5">💼Jobs</li></Link>
                <Link href="#about"><li className="hover:text-white cursor-pointer p-1.5"> ⓘ About</li></Link>
                <Link href="#footer"><li className="hover:text-white cursor-pointer p-1.5">📞 Contact</li></Link>
              </ul>
            </div>
      
            {/* SUPPORT */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Support
              </h3>
      
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
              </ul>
            </div>
      
            {/* CONTACT */}
            <div className="text-white ">
          <h1 className="text-white py-2.5 text-2xl">Contact Us:</h1>

          <p className="pb-2">✉️ sudeepregmi343@gmail.com</p>
          <p className="">📞 9829146075</p>
        </div>
      
          </div>
      
          {/* DIVIDER */}
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
      
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} JobConnect. All rights reserved.
            </p>
      
            <div className="flex gap-4 mt-4 md:mt-0 text-gray-400 text-sm">
              <span className="hover:text-white cursor-pointer">Privacy</span>
              <span className="hover:text-white cursor-pointer">Terms</span>
              <span className="hover:text-white cursor-pointer">Cookies</span>
            </div>
      
          </div>
      
        </div>
      
      </footer>

    );
}