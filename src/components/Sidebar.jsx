import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Phone, Building2, CarFront, Landmark, Map, LogOut, X, Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { icon: Home, text: "Home", href: "/" },
    { icon: Building2, text: "Hotels", href: "/hotels" },
    { icon: CarFront, text: "Cars", href: "/cars" },
    { icon: Landmark, text: "To Visit", href: "/to-visit" },
    { icon: Map, text: "Map", href: "/map" },
    { icon: Phone, text: "Contact", href: "/contact" },
    { icon: Info, text: "About Us", href: "/about" },
    { icon: LogOut, text: "Logout", href: "/logout" }
  ];

  return (
    <>
      {/* Sidebar toggle button */}
      <button
        className={`z-30 flex items-center cursor-pointer left-5 top-5  ${isOpen ? "fixed" : "absolute"} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6 text-white mt-1" /> : <Menu className="h-6 w-6 text-blue-600" />}
      </button>

      {/* Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 h-screen w-64 bg-blue-600 text-white p-5 z-20"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h2 className="text-2xl font-semibold mb-5 ml-7">MoroccoVisit</h2>
            <nav className="mt-2">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="flex items-center text-white hover:text-blue-200 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.text}
                    </Link>
                  </li>
                ))}
                
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
