import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20 min-h-screen">
      {/* Background Subtle Tech/Mesh Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-blue-400 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-300 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT SIDE - CONTENT */}
        <div className="text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
         

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Find Your <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dream Job</span> With JobConnect
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Connect with industry-leading companies, streamline your applications, and unlock your true professional potential with absolute ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link href="/login" >
              <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transform hover:-translate-y-0.5 active:translate-y-0">
                Get Started
              </button>
            </Link>
            <button className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
              Explore Jobs
            </button>
          </div>
          
          {/* Quick Trust Badges */}
          <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">12k+</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Active Jobs</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">500+</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Top Companies</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">98%</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Success Rate</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - VISUAL */}
        <div className="hidden lg:flex justify-center relative">
          <div className="relative w-[450px] h-[450px] flex items-center justify-center">
            {/* Decorative background shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl rotate-6 opacity-10 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500 to-blue-600 rounded-3xl -rotate-3 opacity-10" />
            
            {/* Main Mockup Card Container */}
            <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-2xl w-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-xl">💼</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Product Designer</h4>
                      <p className="text-xs text-slate-500">Stripe • Remote</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400">$140k - $180k</span>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded" />
                  <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-800 rounded" />
                  <div className="h-2 w-4/6 bg-slate-100 dark:bg-slate-800 rounded" />
                </div>

                <div className="pt-2 flex gap-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400">Full-time</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400">Senior Level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}