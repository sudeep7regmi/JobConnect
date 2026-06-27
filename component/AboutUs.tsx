import { Rocket, Eye, Activity, Users, Building, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  const coreValues = [
    {
      title: "Our Mission",
      desc: "To simplify hiring by removing structural barriers between leading companies and job seekers through a fast, intelligent platform.",
      icon: Rocket,
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40",
    },
    {
      title: "Our Vision",
      desc: "Creating an ecosystem where anyone can discover meaningful career paths regardless of background, geographical location, or initial networks.",
      icon: Eye,
      color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40",
    },
    {
      title: "What We Do",
      desc: "We align active candidate pipelines with growing technical teams through streamlined application tracking, verified matching, and speed.",
      icon: Activity,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Structural Minimalist Geometry Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-slate-100 dark:bg-slate-800/30 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* TOP LAYOUT - HERO HEADERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              About JobConnect
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              We are building a modern workspace deployment pipeline designed to connect high-impact regional talent with pioneering corporate opportunities in the cleanest, fastest, and most transparent structural framework possible.
            </p>
          </div>
        </div>

        {/* MIDDLE LAYOUT - VALUABLE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/40 p-8 rounded-3xl transition-all duration-300 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-200 ${value.color}`}>
                  <Icon className="w-5 h-5 stroke-[2.25]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM LAYOUT - HIGHLIGHT TICKER COMPONENT */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-3xl p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left relative overflow-hidden">
          {/* Subtle design flare */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400">
              <Users className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase">Talent</span>
            </div>
            <p className="text-3xl font-black">45,000+</p>
            <p className="text-xs text-slate-400">Profiles curated globally</p>
          </div>

          <div className="space-y-2 sm:border-l sm:border-slate-800 sm:pl-8">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400">
              <Building className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase">Placements</span>
            </div>
            <p className="text-3xl font-black">2,500+</p>
            <p className="text-xs text-slate-400">Engineers placed this quarter</p>
          </div>

          <div className="space-y-2 sm:border-l sm:border-slate-800 sm:pl-8">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-purple-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase">Security</span>
            </div>
            <p className="text-3xl font-black">100%</p>
            <p className="text-xs text-slate-400">Vetted corporate employers</p>
          </div>
        </div>
       
      </div>
    </section>
  );
}