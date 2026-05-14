
{
  /* HERO SECTION */
}
export default function Hero() {
  return (
    <section className="py-16 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Find Your Dream Job With JobConnect
          </h1>

          <p className="text- rounded-2xl text-lg hover:bg-gray-500 mt-6">
            Connect with top companies, apply for jobs, and build your
            professional future with ease.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Get Started
            </button>

            <button className="border px-6 py-3 rounded-xl">
              Explore Jobs
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
           
        </div>
      </div>
    </section>
  );
}
