import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="min-h-[82.4vh] p-8 bg-white/60 rounded-2xl shadow-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold text-ecoDarkGreen mb-6 drop-shadow-lg">
        About EcoTrade 🌍
      </h1>

      <p className="text-lg text-gray-700 max-w-4xl mb-6 leading-relaxed">
        At <span className="font-semibold text-emerald-700">EcoTrade</span>, we believe that small steps can make a big impact.
        We're a community-driven platform that empowers individuals and businesses to engage in
        environmentally responsible trading. Whether you're buying eco-friendly products, earning EcoPoints,
        or using SustainPay to support green causes — you’re contributing to a more sustainable world.
      </p>

      <motion.ul
        className="list-disc ml-6 text-gray-800 space-y-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delayChildren: 0.5, staggerChildren: 0.3 },
          },
        }}
      >
        <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          ♻️ <strong>Mission:</strong> Make sustainability a lifestyle through accessible technology.
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          💚 <strong>Vision:</strong> A world where conscious consumerism is the norm.
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          🌿 <strong>Our Features:</strong> SustainPay for impact payments, EcoPoints as green rewards,
          and an eco-centric marketplace.
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          🧑‍🤝‍🧑 <strong>Community:</strong> Built for people who care — consumers, vendors, and changemakers.
        </motion.li>
      </motion.ul>

      <div className="mt-8">
        <motion.p
          className="italic text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          “Together, we trade for a greener tomorrow.”
        </motion.p>
      </div>
    </motion.div>
  );
}
