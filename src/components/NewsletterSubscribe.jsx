import React, { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    console.log("Newsletter subscription for:", email)
    setEmail("")
  }

  return (
    <section className="bg-blue-600 py-16">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-white text-center mb-8">Stay updated with the latest travel tips and offers for Morocco!</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" variant="secondary">
            Subscribe
          </Button>
        </form>
      </motion.div>
    </section>
  )
}

