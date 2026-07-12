import { useState } from "react";

import Sidebar from "./components/dashboard/Sidebar";
import Header from "./components/dashboard/Header";

import DashboardPage from "./pages/DashboardPage";
import JobsPage from "./pages/JobsPage";
import ProfilePage from "./pages/ProfilePage";
import ReviewsPage from "./pages/ReviewsPage";
import WalletPage from "./pages/WalletPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "jobs":
        return <JobsPage />;

      case "profile":
        return <ProfilePage />;

      case "reviews":
        return <ReviewsPage />;

      case "wallet":
        return <WalletPage />;

      case "settings":
        return <SettingsPage />;

      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1">
        <Header />

        {renderPage()}
      </main>
    </div>
  );
}

export default App;
