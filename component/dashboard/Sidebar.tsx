"use client";

import Link from "next/link";

export default function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Jobs",
      href: "/jobs",
      icon: "💼",
    },
    {
      name: "Applications",
      href: "/applications",
      icon: "📄",
    },
    {
      name: "Messages",
      href: "/messages",
      icon: "💬",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#0f172a] text-white flex flex-col">

      {/* LOGO */}
      <div className="p-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-blue-400">
          JobConnect
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Professional Dashboard
        </p>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-6 space-y-3">

        {menuItems.map((item, index) => (

          <Link
            key={index}
            href={item.href}
            className="
              flex items-center gap-4
              px-4 py-3
              rounded-xl
              hover:bg-blue-600
              transition-all duration-300
              group
            "
          >

            <span className="text-xl">
              {item.icon}
            </span>

            <span className="text-lg group-hover:translate-x-1 transition">
              {item.name}
            </span>

          </Link>

        ))}

      </nav>

      {/* BOTTOM PROFILE */}
      <div className="p-6 border-t border-gray-800">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">
            S
          </div>

          <div>
            <h2 className="font-semibold">
              Sudeep
            </h2>

            <p className="text-sm text-gray-400">
              Recruiter
            </p>
          </div>

        </div>

        <button className="
          mt-6
          w-full
          bg-red-500
          hover:bg-red-600
          transition
          py-3
          rounded-xl
          font-semibold
        ">
          Logout
        </button>

      </div>

    </aside>
  );
}