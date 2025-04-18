import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';

const DashBoard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const isRootDashboard = location.pathname === '/dashboard';

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTotalUsers(res.data.length);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    if (isRootDashboard) {
      fetchUsers();
    }
  }, [isRootDashboard]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`w-64 bg-green-700 text-white p-6 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <h3><Link to="/dashboard" className="text-xl font-bold mb-6 p-3">Admin Dashboard</Link></h3>
        <ul className="space-y-4">
          <li><Link to="/dashboard/users" className="hover:text-green-200">Users</Link></li>
          <li><Link to="/dashboard/products" className="hover:text-green-200">Products</Link></li>
          <li><Link to="/dashboard/orders" className="hover:text-green-200">Orders</Link></li>
          <li><Link to="/dashboard/settings" className="hover:text-green-200">Settings</Link></li>
          <li>
            <button
              onClick={handleLogout}
              className="hover:text-green-300 font-semibold"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Admin Dashboard</h1>

        {isRootDashboard && (
          <>
            {/* Dashboard Overview */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                <p className="text-2xl font-bold text-green-600">{totalUsers}</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-gray-700">Active Products</h3>
                <p className="text-2xl font-bold text-green-600">10</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-gray-700">Orders Completed</h3>
                <p className="text-2xl font-bold text-green-600">0</p>
              </div>
            </section>
          </>
        )}

        {/* Nested Routes */}
        <div className="mt-10">
          <Outlet />
        </div>
      </main>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 bg-green-700 text-white p-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default DashBoard;
