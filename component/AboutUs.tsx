import Link from "next/link";
export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-24 bg-cover bg-center min-h-screen"
      // style={{
      //   backgroundImage:
      //     "url('https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg')",
      // }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About JobConnect
          </h2>

          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            We are building a modern job ecosystem that connects talent with
            opportunity in the fastest and most transparent way.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-white mb-3">
              🚀 Our Mission
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To simplify hiring by removing barriers between companies and job
              seekers through a smart, fast, and reliable platform.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-white mb-3">🤝 Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A world where anyone can find meaningful work regardless of
              background, location, or connections.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-white mb-3">⚡ What We Do</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We connect candidates and recruiters through intelligent job
              matching, real-time listings, and a seamless application system.
            </p>
          </div>
        </div>
       
      </div>
    </section>
  );
}
