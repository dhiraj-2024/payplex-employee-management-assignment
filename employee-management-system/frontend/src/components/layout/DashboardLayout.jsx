import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen">
            <Sidebar />

            <div className="flex-1 p-4 md:p-6 lg:p-8">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;