import { useState } from "react";
import {
  LayoutDashboard, BriefcaseBusiness, User, Star, Wallet, Settings, Menu, ChevronLeft,
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      title: "Dashboard",
      page: "dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "My Jobs",
      page: "jobs",
      icon: <BriefcaseBusiness size={20} />,
    },
    {
      title: "My Profile",
      page: "profile",
      icon: <User size={20} />,
    },
    {
      title: "Reviews",
      page: "reviews",
      icon: <Star size={20} />,
    },
    {
      title: "Wallet",
      page: "wallet",
      icon: <Wallet size={20} />,
    },
    {
      title: "Settings",
      page: "settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white border-r border-gray-200 min-h-screen transition-all duration-300 flex flex-col`}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between p-5 border-b border-gray-200">
        {isOpen && (
          <div>
            <p className="text-xs text-gray-500">
              Worker Dashboard
            </p>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6">
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={() => setActivePage(item.page)}
            className={`relative w-full flex items-center gap-4 px-6 py-4 transition-all duration-300
              ${
                activePage === item.page
                  ? "bg-red-50 text-red-600 border-r-4 border-red-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
              }`}
          >
            {item.icon}

            {isOpen && <span>{item.title}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;