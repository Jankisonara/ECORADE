import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf } from 'lucide-react' // eco-friendly icon

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[82.4vh] p-8 bg-white/60 rounded-2xl shadow-xl backdrop-blur-md text-center flex flex-col items-center justify-center"
    >
      <Leaf className="text-green-600 w-12 h-12 mb-4" />

      <h1 className="text-4xl font-extrabold text-green-700">Welcome to EcoTrade</h1>
      <p className="mt-4 text-gray-700 max-w-xl">
        Buy, sell, and trade eco-friendly products with ease. Join our sustainable marketplace and make a positive impact on the planet.
      </p>

      <Link
        to="/products"
        className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition"
      >
        Explore Products
      </Link>

      {/* Optional: Feature highlights */}
      <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-green-700 font-bold">Eco-Friendly</h3>
          <p className="text-sm text-gray-600">All products support sustainability and reduce environmental impact.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-green-700 font-bold">Fair Trade</h3>
          <p className="text-sm text-gray-600">We promote ethical business practices and fair prices.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-green-700 font-bold">Community Driven</h3>
          <p className="text-sm text-gray-600">Our platform is powered by eco-conscious individuals like you.</p>
        </div>
      </div>
    </motion.div>
  )
}
