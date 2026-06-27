"use client"
import Link from "next/link";
import { MapPin, Building, ExternalLink } from "lucide-react";

export default function OurPartners() {
  const partners = [
    {
      company: "Annapurna Networks",
      location: "Kathmandu",
      type: "Networking Company",
      desc: "Providing networking-related roles, full-time contracts, and comprehensive technical training programs.",
      url: "https://www.annapurna.net.np/",
    },
    {
      company: "Growssence",
      location: "Pokhara",
      type: "Software Company",
      desc: "Offering excellent internship opportunities and jobs focused on full-stack web development and graphic design.",
      url: "https://growssence.com",
    },
    {
      company: "Sathi",
      location: "Syangja",
      type: "Futsal & Ride Management",
      desc: "Pioneering futsal software and ride-sharing operations with rich tech opportunities for software engineers.",
      url: "https://www.sudeepregmi7.com.np/",
    },
  ];

  return (
    <section id="ourPartners" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Premium Ambient Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
            Our Ecosystem
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Trusted Hiring Partners
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Long-term collaborative companies providing streamlined job distributions and internship tracks.
          </p>
        </div>

        {/* PARTNERS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* COMPANY TYPE & NAME */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    <Building className="w-3.5 h-3.5" />
                    {partner.type}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {partner.company}
                  </h3>
                </div>

                {/* LOCATION INFO */}
                <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 mb-5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {partner.location}, Nepal
                </div>

                {/* DESCRIPTION */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {partner.desc}
                </p>
              </div>

              {/* ACTION BUTTON */}
              <Link href={partner.url} target="_blank" >
                <button className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-sm shadow-sm">
                  Visit Website
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}