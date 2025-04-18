import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check if the user is already logged in by looking for the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      // Redirect to the dashboard if user is already logged in and user info is available
      navigate(user.isAdmin ? '/dashboard' : '/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      // Save token and user info in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Check if the user is an admin
      if (user.isAdmin) {
        toast.success('Admin login successful');
        navigate('/dashboard'); // Admin user is redirected to the dashboard
      } else {
        toast.success('User login successful');
        navigate('/'); // Normal user is redirected to the shop page (or home page)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <motion.div
      className="min-h-[82.4vh] flex flex-col justify-center items-center p-6 bg-white/60 rounded-2xl shadow-xl backdrop-blur-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-extrabold text-ecoDarkGreen mb-6 drop-shadow-lg">Login to EcoTrade</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/50 p-6 rounded-xl shadow-inner backdrop-blur-md space-y-5">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password input type
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show eye icon based on state */}
          </button>
        </div>

        <div className="flex justify-between items-center text-sm text-emerald-700">
          <label>
            <input type="checkbox" className="mr-1" /> Remember me
          </label>
          <Link to="/forgot-password" className="hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-ecoDarkGreen bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-sm text-center text-gray-700">
        create an account?{" "}
        <Link to="/register" className="text-ecoDarkGreen font-semibold hover:underline">
          register
        </Link>
      </p>
    </motion.div>
  );
}
