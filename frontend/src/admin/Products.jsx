import React from 'react';
import { Leaf, Phone, Recycle, ShoppingBag } from 'lucide-react';

const allProducts = [
  {
    name: 'Reusable Water Bottle',
    category: 'Hydration',
    description: 'Stay hydrated and help the planet with a sustainable water bottle.',
    price: '$15.99',
    image: 'https://images.unsplash.com/photo-1581182127439-bbf7d5732e8a',
    icon: <Leaf className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Organic Cotton Tote Bag',
    category: 'Accessories',
    description: 'Perfect for grocery shopping or as a daily carry-all, made from organic cotton.',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1571061181581-57df0c1ab803',
    icon: <ShoppingBag className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Biodegradable Trash Bags',
    category: 'Home',
    description: 'Eco-friendly trash bags that degrade naturally without harming the environment.',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1551918594-9b03d1f6f165',
    icon: <Recycle className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Solar Power Bank',
    category: 'Electronics',
    description: 'Charge your devices on-the-go with a solar-powered bank, perfect for outdoor activities.',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1563007307-e7b2b8ed9e0d',
    icon: <Phone className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Eco-Friendly Notebook',
    category: 'Stationery',
    description: 'Sustainable and recyclable notebooks for eco-conscious students and professionals.',
    price: '$6.49',
    image: 'https://images.unsplash.com/photo-1568733809-f63b09d2b17b',
    icon: <Recycle className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Compostable Phone Case',
    category: 'Accessories',
    description: 'Protect your phone with a compostable and biodegradable case made from plant-based materials.',
    price: '$18.99',
    image: 'https://images.unsplash.com/photo-1605207882258-b60b4b933a44',
    icon: <Phone className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Bamboo Toothbrush',
    category: 'Personal Care',
    description: 'A sustainable alternative to plastic toothbrushes, made from bamboo.',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1571681663927-c5b98f728597',
    icon: <Leaf className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Reusable Grocery Bags',
    category: 'Accessories',
    description: 'Say goodbye to plastic bags with these stylish and reusable grocery bags.',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1603432749389-b9caadca07f2',
    icon: <ShoppingBag className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Eco-Friendly Yoga Mat',
    category: 'Sports',
    description: 'Made from biodegradable materials, this mat provides comfort and sustainability during your practice.',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1564518093-24ba5c4ff963',
    icon: <Leaf className="w-5 h-5 inline mr-2 text-green-600" />,
  },
  {
    name: 'Biodegradable Phone Case',
    category: 'Accessories',
    description: 'Made with biodegradable materials, this phone case is both eco-friendly and stylish.',
    price: '$15.49',
    image: 'https://images.unsplash.com/photo-1583303991179-b57d981edbf1',
    icon: <Phone className="w-5 h-5 inline mr-2 text-green-600" />,
  },
];

export default function AdminProducts() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-green-800">Manage Products</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-1">
              {product.icon}
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              Category: <span className="font-medium">{product.category}</span>
            </p>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-green-800 mb-4">{product.price}</p>
            <div className="mt-auto flex justify-between space-x-2">
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                Edit
              </button>
              <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
