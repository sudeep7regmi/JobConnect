export default function Features() {
    const features = [
      {
        title: "Smart Job Matching",
        desc: "Get jobs that match your skills using intelligent filtering.",
        icon: "🎯",
      },
      {
        title: "Fast Applications",
        desc: "Apply to multiple jobs in seconds with saved profiles.",
        icon: "⚡",
      },
      {
        title: "Verified Companies",
        desc: "Connect only with trusted and verified employers.",
        icon: "🏢",
      },
      {
        title: "Real-Time Alerts",
        desc: "Get notified instantly when new jobs are posted.",
        icon: "🔔",
      },
      {
        title: "Career Insights",
        desc: "Understand market trends and salary expectations.",
        icon: "📊",
      },
      {
        title: "Easy Tracking",
        desc: "Track all your job applications in one dashboard.",
        icon: "📌",
      },
    ];
  
    return (
      <section id="features" className="py-24 bg-gray-50 relative bg-cover bg-center"
     style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/021/032/350/small/light-colorful-effect-freeform-gradient-background-free-photo.jpg')",
          backgroundRepeat: "no-repeat",
      }}>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Powerful Features
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Everything you need to find and manage your dream job
            </p>
          </div>
  
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-200 backdrop-blur-2xl p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
  
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
  
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }