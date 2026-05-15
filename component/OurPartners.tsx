import { url } from "inspector";
import Link from "next/link";
export default function OurPartners() {
  const Partners = [
    {
      company: "Annapurna Networks",
      location: "Kathmandu",
      type: "Networking Company",
      desc: "Networking Related jobs on full time conract and training",
      url: "",
    },
    {
      company: "Growssence",
      location: "Pokhara",
      type: "Software Company",
      desc: "Intership and Jobs related to fullStack development and Graphics designing ",
      url: "https://growssence.com",
    },
    {
      company: "Sathi",
      location: "Syangja",
      type: "Futsal Software Management",
      desc: "Futsal software management and Ride sharing along with job oppourtunites for software and computer related aspirants. ",
      url: "",
    },
  ];
  return (
    <section
      id="ourPartners"
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/business-partners-teamwork-friendship-concept-multiethnic-diverse-group-colleagues-join-hands-together-creative-team-98099747.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Partners
          </h2>

          <p className="text-gray-200 mt-4 text-lg italic">
            Long term partner for job and internship distribution
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Partners.map((feature, index) => (
            <div
              key={index}
              className="
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            p-8
            rounded-2xl
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all duration-300
          "
            >
              {/* COMPANY NAME */}
              <div className="text-2xl font-bold text-white mb-4">
                {feature.company}
              </div>

              {/* LOCATION + TYPE */}
              <div className="text-sm text-gray-200 space-y-2">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{feature.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>{feature.type}</span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                {feature.desc}
              </p>
              <Link target="_blank" href={`${feature.url}`}>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer">
                  √isit
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
