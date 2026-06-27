import { 
  Target, 
  Zap, 
  Building2, 
  Bell, 
  BarChart3, 
  Pin 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Smart Job Matching",
      desc: "Get jobs that match your skills using intelligent filtering.",
      icon: Target,
      color: "from-amber-500/20 to-orange-500/10 text-orange-600 dark:text-orange-400"
    },
    {
      title: "Fast Applications",
      desc: "Apply to multiple jobs in seconds with saved profiles.",
      icon: Zap,
      color: "from-blue-500/20 to-indigo-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Verified Companies",
      desc: "Connect only with trusted and verified employers.",
      icon: Building2,
      color: "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Real-Time Alerts",
      desc: "Get notified instantly when new jobs are posted.",
      icon: Bell,
      color: "from-rose-500/20 to-red-500/10 text-rose-600 dark:text-rose-400"
    },
    {
      title: "Career Insights",
      desc: "Understand market trends and salary expectations.",
      icon: BarChart3,
      color: "from-purple-500/20 to-fuchsia-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Easy Tracking",
      desc: "Track all your job applications in one dashboard.",
      icon: Pin,
      color: "from-cyan-500/20 to-blue-500/10 text-cyan-600 dark:text-cyan-400"
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Decorative Blur Background Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-200 dark:bg-indigo-950/40 blur-[100px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[500px] h-[500px] rounded-full bg-blue-200 dark:bg-blue-950/30 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to discover paths, track pipelines, and land your next dream career opportunity.
          </p>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Assign the component token dynamically to a capital letter alias
            const IconComponent = feature.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Subtle accent hover border overlay */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/10 transition-colors pointer-events-none" />

                {/* Dynamic Icon Wrapper */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 stroke-[2.25]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}