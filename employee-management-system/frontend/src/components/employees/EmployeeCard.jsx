import { FaUsers, FaBuilding, FaBriefcase } from "react-icons/fa";

const EmployeeCard = ({
    title,
    value,
}) => {
    const getIcon = () => {
        switch (title) {
            case "Total Employees":
                return <FaUsers className="text-white text-xl" />;
            case "Departments":
                return <FaBuilding className="text-white text-xl" />;
            case "Active Employees":
                return <FaBriefcase className="text-white text-xl" />;
            default:
                return <FaUsers className="text-white text-xl" />;
        }
    };

    const getGradient = () => {
        switch (title) {
            case "Total Employees":
                return "from-pink-500 to-rose-500";
            case "Departments":
                return "from-purple-500 to-indigo-500";
            case "Active Employees":
                return "from-blue-500 to-cyan-500";
            default:
                return "from-pink-500 to-purple-500";
        }
    };

    return (
        <div
            className="
        bg-white/80 backdrop-blur-xl
        rounded-2xl
        p-6
        shadow-lg shadow-pink-500/10
        border border-white/50
        hover:shadow-xl hover:shadow-pink-500/20
        transition-all duration-300
        group
      "
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">
                    {title}
                </h3>
                <div className={`w-12 h-12 bg-gradient-to-br ${getGradient()} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon()}
                </div>
            </div>

            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {value}
            </h2>
        </div>
    );
};

export default EmployeeCard;