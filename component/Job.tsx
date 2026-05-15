import Link from "next/link";
export default function FeaturedJobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "Backend Developer",
      company: "Amazon",
      location: "India",
      type: "Contract",
    },
    {
      title: "Full Stack Developer",
      company: "Startup XYZ",
      location: "Kathmandu",
      type: "Full Time",
    },
  ];

  return (
    <div
      id="featuredJobs"
      className="min-h-screen  bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/vip/2025/03/steve-jobs-inc.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="relative inset-0 bg-black/60"></div>
      {/* HEADER */}
      <div className="shadow-sm p-6 text-center ">
        <h1 className="text-3xl font-bold text-blue-600 ">Available Jobs</h1>
        <p className="text-shadow-black mt-1">
          Find and apply to your dream job
        </p>
      </div>

      {/* JOB GRID */}
      <div className="max-w-7xl mx-auto p-22 grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className=" backdrop-blur-xl border border-white/20 p-8 rounded-2xl hover:-translate-y-2 transition"
          >
            <h2 className="text-xl font-bold text-black">{job.title}</h2>

            <p className="text-black mt-2">{job.company}</p>

            <div className="flex justify-between mt-4 text-sm text-black">
              <span>📍{job.location}</span>
              <span>{job.type}</span>
            </div>

            <Link href="./login">
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer">
                Apply Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
