import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length > 0) {
      // Proceed to checkout
      navigate('/checkout');
    } else {
      alert("Your cart is empty!");
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold text-ecoDarkGreen mb-4">Your Cart</h1>

      {cart.length > 0 ? (
        <div>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-white/80 rounded-lg shadow-md">
                <div>
                  <h2 className="font-semibold text-green-900">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-green-700">{formatPrice(item.price)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="flex justify-between items-center mt-6 p-4 bg-white/80 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-green-700">Total</p>
            <p className="text-2xl font-bold text-green-900">{formatPrice(getTotalPrice())}</p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleCheckout}
              className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}
    </div>
  );
}
