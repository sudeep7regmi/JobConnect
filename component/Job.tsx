"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ArrowUpRight } from "lucide-react";

// 1. Structure your TypeScript interface/Type matching your expected backend JSON payload
interface Job {
  id: string | number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
}

export default function FeaturedJobs() {
  // 2. Initialize state for data fetching pipelines
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating an asynchronous backend API fetch route (e.g., fetch("/api/jobs"))
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        // Simulate a 1.5 second server network round-trip latency response
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        const mockBackendData: Job[] = [
          {
            id: 1,
            title: "Frontend Developer",
            company: "Google",
            location: "Remote",
            type: "Full Time",
            salary: "$120k - $150k"
          },
          {
            id: 2,
            title: "Backend Developer",
            company: "Amazon",
            location: "India",
            type: "Contract",
            salary: "$90k - $110k"
          },
          {
            id: 3,
            title: "Full Stack Developer",
            company: "Startup XYZ",
            location: "Kathmandu",
            type: "Full Time",
            salary: "Rs. 150k - 200k"
          },
        ];

        setJobs(mockBackendData);
      } catch (error) {
        console.error("Error pulling records from database:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section id="featuredJobs" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Visual background ambient decorations */}
      <div className="absolute inset-x-0 top-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute top-1/3 right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
            Latest Openings
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Featured Positions Available
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Hand-picked opportunities from leading innovative workspaces around the globe.
          </p>
        </div>

        {/* JOB CARDS RENDERING BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? // Loading Skeletons UI shown when waiting for backend
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-8 rounded-3xl space-y-4 animate-pulse">
                  <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
                  <div className="flex justify-between pt-4">
                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4" />
                  </div>
                  <div className="h-11 bg-slate-200 dark:bg-slate-800 rounded-xl w-full pt-2" />
                </div>
              ))
            : // Actual Data Render once state populated
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Upper Metadata Row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                          {job.company}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {job.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Salary Tag Info */}
                    {job.salary && (
                      <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-6">
                        {job.salary}
                      </div>
                    )}
                  </div>

                  {/* Operational Meta Row */}
                  <div>
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {job.type}
                      </span>
                    </div>

                    {/* Action Call Button */}
                    <Link href="/login">
                      <button className="mt-6 w-full inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-sm shadow-sm transform active:scale-[0.98]">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}