import { worker } from "../../data/workerData";
import workerImage from "../../assets/images/workerimg.jpg";

function ProfileSummary() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-bold mb-6">
        My Profile
      </h2>

      <div className="flex flex-col items-center">

        <img
          src={workerImage}
          alt={worker.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-red-100"
        />

        <h3 className="mt-4 text-xl font-bold">
          {worker.name}
        </h3>

        <p className="text-gray-500">
          {worker.profession}
        </p>

      </div>

      <div className="mt-8 space-y-3">

        <div className="flex justify-between">
          <span>Rating</span>
          <span>{worker.rating}</span>
        </div>

        <div className="flex justify-between">
          <span>Experience</span>
          <span>{worker.experience}</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>

          <span className="text-green-600 font-semibold">
            {worker.status}
          </span>
        </div>

      </div>

      <button
        className="
          mt-8
          w-full
          bg-red-600
          text-white
          py-3
          rounded-xl
          hover:bg-red-700
          transition
        "
      >
        Edit Profile
      </button>

    </div>
  );
}

export default ProfileSummary;