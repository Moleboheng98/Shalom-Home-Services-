import { worker } from "../../data/workerData";

function JobsList() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Today's Jobs
      </h2>

      <div className="space-y-5">

        {worker.jobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-between items-start">

              <div>
                <h3 className="text-lg font-semibold">
                  {job.service}
                </h3>

                <p className="text-gray-500 mt-1">
                  Client: {job.client}
                </p>

                <p className="text-gray-500">
                  📍 {job.location}
                </p>

                <p className="text-gray-500">
                  🕒 {job.time}
                </p>
              </div>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                Upcoming
              </span>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default JobsList;