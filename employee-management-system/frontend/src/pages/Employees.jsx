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

import Loader from "../components/ui/Loader";

import EmptyState from "../components/ui/EmptyState";

const Employees = () => {
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
            console.log(error.response.data);

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
                "Employee updated"
            );

            setEditingEmployee(null);

            fetchEmployees();
        } catch (error) {
            toast.error(
                "Update failed"
            );
        }
    };

    const deleteEmployee = async (
        id
    ) => {
        const confirmDelete =
            window.confirm(
                "Delete employee?"
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
                "Delete failed"
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

                <EmployeeForm
                    onSubmit={
                        editingEmployee
                            ? updateEmployee
                            : addEmployee
                    }
                    editingEmployee={
                        editingEmployee
                    }
                />

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

export default Employees;