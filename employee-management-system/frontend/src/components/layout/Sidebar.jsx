import {
    FaUsers,
    FaHome,
    FaSignOutAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import {
    NavLink,
    useNavigate,
} from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const navClass = ({ isActive }) =>
        `
      flex items-center gap-3
      px-4 py-3
      rounded-xl
      transition-all duration-300
      ${isActive
            ? "bg-white/20 text-white font-semibold shadow-lg backdrop-blur-sm"
            : "hover:bg-white/10 text-white/80 hover:text-white"
        }
    `;

    const sidebarContent = (
        <>
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <FaUsers className="text-white text-lg" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        PayPlex
                    </h1>
                    <p className="text-xs text-white/70">EMS</p>
                </div>
            </div>

            <div className="space-y-3">
                <NavLink
                    to="/"
                    className={navClass}
                    onClick={() => setIsOpen(false)}
                >
                    <FaHome />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/employees"
                    className={navClass}
                    onClick={() => setIsOpen(false)}
                >
                    <FaUsers />
                    Employees
                </NavLink>

                <button
                    onClick={() => {
                        logout();
                        setIsOpen(false);
                    }}
                    className="
            flex items-center gap-3
            px-4 py-3
            rounded-xl
            hover:bg-white/10
            w-full
            mt-10
            text-white/80 hover:text-white
            transition-all duration-300
          "
                >
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                fixed md:sticky top-0 left-0 z-50
                h-screen
                bg-gradient-to-b from-pink-600 via-purple-600 to-indigo-700
                text-white
                p-6
                transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                w-[260px]
            `}
            >
                {sidebarContent}
            </div>
        </>
    );
};

export default Sidebar;