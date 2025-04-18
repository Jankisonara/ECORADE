import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShoppingBag, Recycle, Phone } from 'lucide-react';
import { useCart } from './CartContext';

const allProducts = [
  {
    name: 'Reusable Water Bottle',
    category: 'Hydration',
    description: 'Stay hydrated and help the planet with a sustainable water bottle.',
    price: '$15.99',
    image: 'https://images.unsplash.com/photo-1581182127439-bbf7d5732e8a',
    icon: <Leaf />,
  },
  {
    name: 'Organic Cotton Tote Bag',
    category: 'Accessories',
    description: 'Perfect for grocery shopping or as a daily carry-all, made from organic cotton.',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1571061181581-57df0c1ab803',
    icon: <ShoppingBag />,
  },
  {
    name: 'Biodegradable Trash Bags',
    category: 'Home',
    description: 'Eco-friendly trash bags that degrade naturally without harming the environment.',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1551918594-9b03d1f6f165',
    icon: <Recycle />,
  },
  {
    name: 'Solar Power Bank',
    category: 'Electronics',
    description: 'Charge your devices on-the-go with a solar-powered bank, perfect for outdoor activities.',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1563007307-e7b2b8ed9e0d',
    icon: <Phone />,
  },
  {
    name: 'Eco-Friendly Notebook',
    category: 'Stationery',
    description: 'Sustainable and recyclable notebooks for eco-conscious students and professionals.',
    price: '$6.49',
    image: 'https://images.unsplash.com/photo-1568733809-f63b09d2b17b',
    icon: <Recycle />,
  },
  {
    name: 'Compostable Phone Case',
    category: 'Accessories',
    description: 'Protect your phone with a compostable and biodegradable case made from plant-based materials.',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1605207882258-b60b4b933a44',
    icon: <Phone />,
  },
  {
    name: 'Bamboo Toothbrush',
    category: 'Personal Care',
    description: 'A sustainable alternative to plastic toothbrushes, made from bamboo.',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1571681663927-c5b98f728597',
    icon: <Leaf />,
  },
  {
    name: 'Reusable Grocery Bags',
    category: 'Accessories',
    description: 'Say goodbye to plastic bags with these stylish and reusable grocery bags.',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1603432749389-b9caadca07f2',
    icon: <ShoppingBag />,
  },
  {
    name: 'Eco-Friendly Yoga Mat',
    category: 'Sports',
    description: 'Made from biodegradable materials, this mat provides comfort and sustainability during your practice.',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1564518093-24ba5c4ff963',
    icon: <Leaf />,
  },
  {
    name: 'Biodegradable Phone Case',
    category: 'Accessories',
    description: 'Made with biodegradable materials, this phone case is both eco-friendly and stylish.',
    price: '$15.49',
    image: 'https://images.unsplash.com/photo-1583303991179-b57d981edbf1',
    icon: <Phone />,
  },
];

export default function Products() {
  const [search, setSearch] = useState('');
  const { cart, addToCart } = useCart();

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="min-h-[82.4vh] p-8 bg-white/60 rounded-2xl shadow-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold text-ecoDarkGreen mb-4 drop-shadow-lg text-center">
        Our Eco-Friendly Products 🛒
      </h1>

      <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
        Discover a curated list of sustainable and eco-conscious products designed to reduce environmental impact and promote green living.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-emerald-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white/80 p-5 rounded-xl shadow-md border border-emerald-200 backdrop-blur-sm hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-emerald-700 text-3xl mb-2">{product.icon}</div>
              <h2 className="text-xl font-semibold text-ecoDarkGreen">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{product.category}</p>

              {/* Product Image */}
              <div className="h-48 w-full overflow-hidden rounded-md mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300"
                />
              </div>

              {/* Product Description */}
              <p className="text-sm text-gray-500 mb-4">{product.description}</p>

              {/* Price */}
              <p className="text-lg font-bold text-emerald-600">{product.price}</p>

              {/* Add to Cart Button */}
              <button
                className="mt-4 py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">No matching products found.</p>
        )}
      </div>
    </motion.div>
  );
}