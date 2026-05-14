export default function JobsPage() {
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
      <div className="min-h-screen bg-gray-50">
        
        {/* HEADER */}
        <div className="bg-white shadow-sm p-6">
          <h1 className="text-3xl font-bold text-blue-600">
            Available Jobs
          </h1>
          <p className="text-gray-600 mt-1">
            Find and apply to your dream job
          </p>
        </div>
  
        {/* JOB GRID */}
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
  
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              
              <h2 className="text-xl font-bold text-gray-800">
                {job.title}
              </h2>
  
              <p className="text-gray-600 mt-2">
                {job.company}
              </p>
  
              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>
  
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                Apply Now
              </button>
  
            </div>
          ))}
  
        </div>
      </div>
    );
  }