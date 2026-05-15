'use client';
import Sidebar from "@/component/dashboard/Sidebar";
import {useEffect, useState} from "react";
export default function DashboardPage() {
    const [data, setData] = useState({jobs:0,applications:0});
    useEffect(()=>{
        async function fetchData() {
            const res = await fetch("/api/dashboard")
            const json = await res.json();
            setData(json);
        }
        fetchData();
    },[]);
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* TOP BAR */}
        <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard
          </h1>

          <div className="text-sm text-gray-500">
            Welcome back 👋
          </div>

        </div>

        {/* CONTENT AREA */}
        <div className="p-6 space-y-6">

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-gray-500 text-sm">Total Jobs</h2>
              <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-gray-500 text-sm">Applications</h2>
              <p className="text-3xl font-bold text-gray-800 mt-2">34</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-gray-500 text-sm">Profile Views</h2>
              <p className="text-3xl font-bold text-gray-800 mt-2">89</p>
            </div>

          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-3 text-gray-600 text-sm">

              <li>✔ Applied to Frontend Developer at Google</li>
              <li>✔ New job posted: Backend Engineer</li>
              <li>✔ Profile updated successfully</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}