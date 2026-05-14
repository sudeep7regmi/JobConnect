import Sidebar from "@/components/dashboard/Sidebar";

export default function 
<div className="flex min-h-screen bg-gray-100">

  <Sidebar />

  <div className="flex-1">

    <Topbar />

    <main className="p-8">
      <StatsCards />
      <Activity />
      <JobTable />
    </main>

  </div>

</div>