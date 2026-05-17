import {
    useEffect,
    useState,
} from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

import DashboardLayout from "../components/layout/DashboardLayout";

import Topbar from "../components/layout/Topbar";

import EmployeeForm from "../components/employees/EmployeeForm";

import EmployeeTable from "../components/employees/EmployeeTable";

import EmployeeCard from "../components/employees/EmployeeCard";

import Loader from "../components/ui/Loader";

import EmptyState from "../components/ui/EmptyState";

const Dashboard = () => {
    const [employees, setEmployees] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    const [editingEmployee, setEditingEmployee] =
        useState(null);

    const fetchEmployees = async () => {
        try {
            setLoading(true);

            const response = await API.get(
                `/employees/?search=${search}`
            );

            setEmployees(response.data.results);
        } catch (error) {
            toast.error(
                "Failed to fetch employees"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, [search]);

    const addEmployee = async (data) => {
        try {
            await API.post(
                "/employees/",
                data
            );

            toast.success(
                "Employee added successfully"
            );

            fetchEmployees();
        } catch (error) {
            toast.error(
                JSON.stringify(
                    error.response.data
                )
            );
        }
    };

    const updateEmployee = async (
        data
    ) => {
        try {
            await API.put(
                `/employees/${editingEmployee.id}/`,
                data
            );

            toast.success(
                "Employee updated successfully"
            );

            setEditingEmployee(null);

            fetchEmployees();
        } catch (error) {
            toast.error(
                "Failed to update employee"
            );
        }
    };

    const deleteEmployee = async (
        id
    ) => {
        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete?"
            );

        if (!confirmDelete) return;

        try {
            await API.delete(
                `/employees/${id}/`
            );

            toast.success(
                "Employee deleted"
            );

            fetchEmployees();
        } catch (error) {
            toast.error(
                "Failed to delete employee"
            );
        }
    };

    return (
        <DashboardLayout>
            <div className="space-y-6 md:space-y-8">
                <Topbar
                    search={search}
                    setSearch={setSearch}
                />

                <div
                    className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4 md:gap-6
          "
                >
                    <EmployeeCard
                        title="Total Employees"
                        value={employees.length}
                    />

                    <EmployeeCard
                        title="Departments"
                        value={
                            new Set(
                                employees.map(
                                    (e) => e.department
                                )
                            ).size
                        }
                    />

                    <EmployeeCard
                        title="Active Employees"
                        value={employees.length}
                    />
                </div>

                {editingEmployee && (
                    <EmployeeForm
                        onSubmit={updateEmployee}
                        editingEmployee={editingEmployee}
                    />
                )}

                {loading ? (
                    <Loader />
                ) : employees.length === 0 ? (
                    <EmptyState message="No employees found" />
                ) : (
                    <EmployeeTable
                        employees={employees}
                        onEdit={
                            setEditingEmployee
                        }
                        onDelete={
                            deleteEmployee
                        }
                    />
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;