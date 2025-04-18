import React from "react";
import { motion } from 'framer-motion';
export default function EcoPoint() {
  return (
    <div className="min-h-[82.4vh] flex items-center justify-center bg-gradient-to-br bg-white/60">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/40 border border-green-300 rounded-2xl shadow-2xl p-8 w-full max-w-2xl"
      >
        <h1 className="text-4xl font-extrabold text-ecoDarkGreen text-center mb-6 drop-shadow-md">
          🌿 EcoPoints Rewards
        </h1>

        <p className="text-green-800 text-lg text-center mb-6">
          Earn EcoPoints by shopping eco-friendly, recycling, and making sustainable choices!
        </p>

        <ul className="space-y-4 text-green-700 text-base font-medium mb-8">
          <li className="flex items-center gap-2">
            <span className="text-2xl">💚</span> Buy sustainable products <span className="ml-auto font-bold">+10</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">♻️</span> Recycle items at our collection points <span className="ml-auto font-bold">+20</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl">🌱</span> Refer a friend <span className="ml-auto font-bold">+30</span>
          </li>
        </ul>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-green-50 border border-green-300 rounded-xl p-6 text-center shadow-inner"
        >
          <h2 className="text-xl font-semibold text-green-800 mb-2">Your Current Balance</h2>
          <motion.p
            className="text-4xl font-extrabold text-green-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            0 EcoPoints
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
