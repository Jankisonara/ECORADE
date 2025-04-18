import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SustainPay from './pages/SustainPay';
import Login from './pages/Login';
import Register from './pages/Register';
import Ecopoint from './pages/EcoPoint';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './pages/CartContext';

// Admin dashboard and its sections
import DashBoard from './pages/DashBoard';
import Users from './admin/Users';
import AdminProducts from './admin/Products';
import Orders from './admin/Orders';
import Settings from './admin/Settings';

import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/your-bg.jpg')" }}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sustainpay" element={<SustainPay />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ecopoint" element={<Ecopoint />} />

              {/* Cart Route */}
              <Route path="/cart" element={<Cart />} />

              {/* Admin Routes */}
              <Route path="/dashboard" element={<DashBoard />}>
                <Route path="users" element={<Users />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="orders" element={<Orders />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
