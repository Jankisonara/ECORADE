import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../pages/CartContext';  // Importing the cart context
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { cart } = useCart();  // Accessing cart state from the cart context

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Check for logged-in user when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="p-4 bg-green-200 shadow-md flex items-center justify-between flex-wrap">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-12 rounded-full shadow-md object-cover"
          />
        </Link>
        <Link to="/">
          <span className="text-green-900 font-extrabold text-xl">EcoTrade</span>
        </Link>
      </div>

      {/* Centered Navigation Links */}
      <div className="flex-1 flex justify-center gap-6 flex-wrap">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-bold transition-colors duration-300'
              : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-bold transition-colors duration-300'
              : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-bold transition-colors duration-300'
              : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300'
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/sustainpay"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-bold transition-colors duration-300'
              : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300'
          }
        >
          SustainPay
        </NavLink>
        <NavLink
          to="/ecopoint"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-bold transition-colors duration-300'
              : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300'
          }
        >
          EcoPoint
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-bold transition-colors duration-300'
              : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300'
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Cart Icon with Name */}
      <div className="relative flex items-center mr-4">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-bold transition-colors duration-300'
              : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300'
          }
        >
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-green-900 transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1.5 9H4.5L3 3zM9 21a2 2 0 1 0 4 0H9zM14 21a2 2 0 1 0 4 0h-4z"
              />
            </svg>
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-600 rounded-full px-2 py-1 transition-all duration-300">
                {cart.length}
              </span>
            )}
            {/* Cart Label */}
            <span className="ml-2 text-green-900 font-bold hidden md:block">
              Cart
            </span>
          </div>
        </NavLink>
      </div>


      {/* User Profile or Login (Aligned to the Right) */}
      <div className="flex items-center gap-4 ml-auto">
        {user ? (
          <>
            <span className="text-green-900 font-bold">{user.name || 'Guest'}</span>
            <img
              src={user.profilePicture || 'https://www.gravatar.com/avatar/?d=mp'}
              alt="profile"
              className="h-8 w-8 rounded-full object-cover"
            />
            <button
              onClick={handleLogout}
              className="text-green-900 font-bold hover:text-green-600 transition-colors duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold transition-colors duration-300'
                : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300'
            }
          >
            Login
          </NavLink>
        )}
      </div>



      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-green-900 transition-transform duration-300"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 p-4 bg-green-200 rounded-lg shadow-lg z-10 transition-transform duration-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold transition-colors duration-300'
                : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300 py-2'
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold transition-colors duration-300'
                : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300 py-2'
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold transition-colors duration-300'
                : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300 py-2'
            }
            onClick={toggleMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="/sustainpay"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold transition-colors duration-300'
                : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300 py-2'
            }
            onClick={toggleMenu}
          >
            SustainPay
          </NavLink>
          <NavLink
            to="/ecopoint"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold transition-colors duration-300'
                : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300 py-2'
            }
            onClick={toggleMenu}
          >
            EcoPoint
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold transition-colors duration-300'
                : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300 py-2'
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold transition-colors duration-300'
                : 'text-green-900 font-bold hover:text-green-600 transition-colors duration-300 py-2'
            }
            onClick={toggleMenu}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>

  );
}
