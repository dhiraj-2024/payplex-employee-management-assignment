import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = ({ search, setSearch }) => {
    return (
        <div
            className="
        bg-white/80 backdrop-blur-xl
        px-4 md:px-6 py-4
        rounded-2xl
        shadow-lg shadow-pink-500/10
        flex
        flex-col md:flex-row
        justify-between
        gap-4
        items-center
        border border-white/50
      "
        >
            <div className="w-full md:w-auto">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Dashboard
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                    Employee Management System
                </p>
            </div>

            <div
                className="
          flex items-center
          bg-gray-100/50
          px-4 py-3
          rounded-xl
          w-full md:w-[300px]
          border border-gray-200
          focus-within:ring-2 focus-within:ring-pink-500/50 focus-within:border-pink-500
          transition-all
        "
            >
                <FaSearch className="text-gray-400" />

                <input
                    type="text"
                    placeholder="Search employee..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="
            bg-transparent
            outline-none
            ml-3
            w-full
            text-gray-700
            placeholder-gray-400
          "
                />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button className="w-10 h-10 bg-gray-100/50 rounded-xl flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-all border border-gray-200">
                    <FaBell className="text-gray-500" />
                </button>
                <button className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/30 hover:shadow-xl transition-all">
                    <FaUserCircle />
                </button>
            </div>
        </div>
    );
};

export default Topbar;