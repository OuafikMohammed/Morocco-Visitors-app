import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">MoroccoVisit</h3>
            <p className="text-sm">Your all-in-one platform for managing visitors to Morocco</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@moroccovisit.com</p>
            <p className="text-sm">Phone: +212 123 456 789</p>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 border-t border-gray-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm">&copy; {new Date().getFullYear()} MoroccoVisit. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

