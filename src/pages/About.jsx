"use client"
import { motion } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="container mx-auto px-4 py-8" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h1 className="text-3xl font-bold mb-4" variants={itemVariants}>
        About MoroccoVisit
      </motion.h1>
      <motion.p className="mb-4" variants={itemVariants}>
        MoroccoVisit is your ultimate platform for exploring and experiencing the magic of Morocco. We offer a
        comprehensive suite of services to make your Moroccan adventure unforgettable.
      </motion.p>
      <motion.h2 className="text-2xl font-semibold mb-2" variants={itemVariants}>
        Why Choose MoroccoVisit?
      </motion.h2>
      <motion.ul className="list-disc pl-5 mb-4" variants={containerVariants}>
        {[
          "Comprehensive travel planning and management",
          "Curated selection of hotels and accommodations",
          "Reliable car rental services",
          "Insider tips on the best places to visit",
          "Real-time updates and travel information",
          "24/7 customer support",
        ].map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <motion.p variants={itemVariants}>
        Unlike other websites, MoroccoVisit specializes exclusively in Moroccan travel. Our deep understanding of the
        country's culture, customs, and hidden gems allows us to provide an unparalleled travel experience.
      </motion.p>
    </motion.div>
  )
}

