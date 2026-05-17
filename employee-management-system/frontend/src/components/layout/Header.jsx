import { Link } from "react-router-dom";
import { FaUsers, FaBuilding } from "react-icons/fa";

const Header = () => {
    return (
        <header className="w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <FaUsers className="text-white text-lg" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                PayPlex
                            </h1>
                            <p className="text-xs text-gray-500">Employee Management</p>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link 
                            to="/login" 
                            className="text-gray-600 hover:text-pink-600 font-medium transition-colors duration-200"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/register" 
                            className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </nav>

                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-pink-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
