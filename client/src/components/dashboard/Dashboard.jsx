import Sidebar from "./Sidebar";
import Header from "./Header";
import StatsCards from "./StatsCards";
import JobsList from "./JobsList";
import ProfileSummary from "./ProfileSummary";
import Reviews from "./Reviews";

function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Header />

        <div className="p-8 space-y-8">
          <StatsCards />

          <div className="mt-8">
            <JobsList />
          </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProfileSummary />
            <Reviews />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;