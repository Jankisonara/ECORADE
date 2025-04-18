import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SustainPay() {
  const [paid, setPaid] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaid(true);
  };

  return (
    <motion.div
      className="min-h-[82.4vh] p-8 bg-white/60 rounded-2xl shadow-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold text-ecoDarkGreen mb-6 drop-shadow-lg">
        SustainPay 🌿
      </h1>

      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        Support eco-initiatives directly through SustainPay. Your contribution helps us plant trees,
        reduce plastic, and empower green communities. Every payment counts toward a greener world.
      </p>

      {!paid ? (
        <form onSubmit={handlePayment} className="grid gap-4 max-w-xl">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="px-4 py-2 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="px-4 py-2 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="number"
            placeholder="Amount (₹)"
            required
            className="px-4 py-2 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          {/* Card Details */}
          <input
            type="text"
            placeholder="Card Number"
            maxLength={16}
            required
            className="px-4 py-2 rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              required
              className="px-4 py-2 w-full rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="password"
              placeholder="CVV"
              maxLength={3}
              required
              className="px-4 py-2 w-full rounded-md border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-ecoDarkGreen bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition"
          >
            Pay Now
          </button>
        </form>
      ) : (
        <motion.div
          className="bg-emerald-100 text-ecoDarkGreen font-semibold text-lg p-6 rounded-xl mt-6 shadow-inner"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          ✅ Payment Successful! Thank you for supporting sustainability.
        </motion.div>
      )}
    </motion.div>
  );
}
