import { worker } from "../../data/workerData";

function Header() {
  return (
    <header className="bg-white shadow-sm rounded-xl mx-6 mt-6 px-8 py-6">

      <div className="flex items-center justify-between">

        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back,
            <span className="text-red-600">
              {" "}
              {worker.name.split(" ")[0]}
            </span>
            👋
          </h1>

          <p className="text-gray-500 mt-2">
            Ready for today's jobs?
          </p>
        </div>

        {/* Right */}
        <div className="text-right">

          <h2 className="text-2xl font-bold text-red-600">
            SHALOM
          </h2>

          <p className="text-gray-500">
            Home Services
          </p>

        </div>

      </div>

    </header>
  );
}

export default Header;