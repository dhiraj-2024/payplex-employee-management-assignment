import { useEffect, useState } from "react";
import { FaUserPlus, FaEdit } from "react-icons/fa";

import Button from "../ui/Button";
import Input from "../ui/Input";

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    salary: "",
    hire_date: "",
};

const EmployeeForm = ({
    onSubmit,
    editingEmployee,
}) => {
    const [formData, setFormData] =
        useState(initialState);

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {
        if (editingEmployee) {
            setFormData(editingEmployee);
        } else {
            setFormData(initialState);
        }
    }, [editingEmployee]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        setLoading(true);

        await onSubmit({
            ...formData,
            salary: parseFloat(formData.salary),
        });

        setLoading(false);

        setFormData(initialState);
    };

    return (
        <form
            onSubmit={submitForm}
            className="
        bg-white/80 backdrop-blur-xl
        rounded-2xl
        p-6 md:p-8
        shadow-lg shadow-pink-500/10
        border border-white/50
        grid
        grid-cols-1 md:grid-cols-2
        gap-5
      "
        >
            <div className="md:col-span-2 mb-2">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
                    {editingEmployee ? (
                        <>
                            <FaEdit className="text-pink-600" />
                            Edit Employee
                        </>
                    ) : (
                        <>
                            <FaUserPlus className="text-pink-600" />
                            Add New Employee
                        </>
                    )}
                </h2>
            </div>

            <Input
                required
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
            />

            <Input
                required
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
            />

            <Input
                required
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <Input
                required
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />

            <Input
                required
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
            />

            <Input
                required
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
            />

            <Input
                required
                label="Salary"
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
            />

            <Input
                required
                label="Hire Date"
                type="date"
                name="hire_date"
                value={formData.hire_date}
                onChange={handleChange}
            />

            <div className="md:col-span-2 mt-4">
                <Button
                    type="submit"
                    disabled={loading}
                    className="
            bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700
            text-white
            w-full
            py-3.5
            rounded-xl
            font-medium
            shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40
            transition-all duration-300
            flex items-center justify-center gap-2
          "
                >
                    {loading ? (
                        "Please wait..."
                    ) : editingEmployee ? (
                        <>
                            Update Employee
                            <FaEdit className="text-sm" />
                        </>
                    ) : (
                        <>
                            Add Employee
                            <FaUserPlus className="text-sm" />
                        </>
                    )}
                </Button>
            </div>
        </form>
    );
};

export default EmployeeForm;