import { FaEdit, FaTrash, FaUser } from "react-icons/fa";
import Button from "../ui/Button";

const EmployeeTable = ({
    employees,
    onEdit,
    onDelete,
}) => {
    return (
        <div
            className="
        bg-white/80 backdrop-blur-xl
        rounded-2xl
        shadow-lg shadow-pink-500/10
        border border-white/50
        overflow-hidden
      "
        >
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gradient-to-r from-pink-50/50 to-purple-50/50">
                            <th className="text-left p-4 md:p-5 font-semibold text-gray-700">
                                Name
                            </th>

                            <th className="text-left p-4 md:p-5 font-semibold text-gray-700">
                                Email
                            </th>

                            <th className="text-left p-4 md:p-5 font-semibold text-gray-700">
                                Department
                            </th>

                            <th className="text-left p-4 md:p-5 font-semibold text-gray-700">
                                Position
                            </th>

                            <th className="text-left p-4 md:p-5 font-semibold text-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => (
                            <tr
                                key={employee.id}
                                className="border-b border-gray-100 hover:bg-pink-50/30 transition-colors duration-200"
                            >
                                <td className="p-4 md:p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                            <FaUser className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">
                                                {employee.first_name}{" "}
                                                {employee.last_name}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td className="p-4 md:p-5 text-gray-600">
                                    {employee.email}
                                </td>

                                <td className="p-4 md:p-5">
                                    <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                                        {employee.department}
                                    </span>
                                </td>

                                <td className="p-4 md:p-5 text-gray-600">
                                    {employee.position}
                                </td>

                                <td className="p-4 md:p-5">
                                    <div className="flex gap-2">
                                        <Button
                                            onClick={() =>
                                                onEdit(employee)
                                            }
                                            className="
                        bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600
                        text-white
                        px-4 py-2
                        rounded-xl
                        shadow-md shadow-blue-500/30 hover:shadow-lg
                        transition-all duration-300
                        flex items-center gap-2
                        text-sm
                      "
                                        >
                                            <FaEdit className="text-xs" />
                                            <span className="hidden sm:inline">Edit</span>
                                        </Button>

                                        <Button
                                            onClick={() =>
                                                onDelete(employee.id)
                                            }
                                            className="
                        bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600
                        text-white
                        px-4 py-2
                        rounded-xl
                        shadow-md shadow-red-500/30 hover:shadow-lg
                        transition-all duration-300
                        flex items-center gap-2
                        text-sm
                      "
                                        >
                                            <FaTrash className="text-xs" />
                                            <span className="hidden sm:inline">Delete</span>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeTable;