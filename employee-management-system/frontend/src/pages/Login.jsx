import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaLock, FaUser, FaArrowRight } from "react-icons/fa";

import API from "../api/axios";
import Header from "../components/layout/Header";

const Login = () => {
    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            username: "",
            password: "",
        });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await API.post(
                "/auth/login/",
                formData
            );

            localStorage.setItem(
                "token",
                response.data.access
            );

            localStorage.setItem(
                "refresh",
                response.data.refresh
            );

            toast.success("Login successful");

            navigate("/");
        } catch (error) {
            toast.error("Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
            <Header />

            <div className="flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-pink-500/10 p-8 border border-white/50">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <FaLock className="text-white text-2xl" />
                            </div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                Welcome Back
                            </h1>
                            <p className="text-gray-500">
                                Sign in to your account
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    required
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-white/50"
                                />
                            </div>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all bg-white/50"
                                />
                            </div>

                            <button
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    "Please wait..."
                                ) : (
                                    <>
                                        Login
                                        <FaArrowRight className="text-sm" />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="text-center text-gray-500 mt-6">
                            Don't have an account?
                            <Link
                                to="/register"
                                className="text-pink-600 ml-2 font-medium hover:text-pink-700 transition-colors"
                            >
                                Register
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            Secure login powered by PayPlex
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;