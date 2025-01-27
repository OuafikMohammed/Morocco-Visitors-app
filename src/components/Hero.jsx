import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToPlans = () => {
        document.getElementById("plans-section").scrollIntoView({ behavior: "smooth" });
      }
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/morocco.svg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover the Magic of Morocco
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your all-in-one platform for managing visitors to Morocco
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" onClick={scrollToPlans}>Get Started</Button>
        </motion.div>
      </div>
    </div>
  )
}

