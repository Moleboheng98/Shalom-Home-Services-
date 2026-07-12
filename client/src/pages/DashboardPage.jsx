import StatsCards from "../components/dashboard/StatsCards";
import JobsList from "../components/dashboard/JobsList";
import ProfileSummary from "../components/dashboard/ProfileSummary";
import Reviews from "../components/dashboard/Reviews";

function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      <StatsCards />

      <JobsList />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProfileSummary />
        <Reviews />
      </div>
    </div>
  );
}

export default DashboardPage;