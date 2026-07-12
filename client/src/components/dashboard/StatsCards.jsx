import { worker } from "../../data/workerData";

function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Jobs Today</h3>
        <p className="text-3xl font-bold mt-2">
          {worker.jobsToday}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Completed Jobs</h3>
        <p className="text-3xl font-bold mt-2">
          {worker.completedJobs}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Rating</h3>
        <p className="text-3xl font-bold mt-2">
          ⭐ {worker.rating}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Status</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">
          {worker.status}
        </p>
      </div>

    </div>
  );
}

export default StatsCards;