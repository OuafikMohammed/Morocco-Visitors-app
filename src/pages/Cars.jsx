"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const cars = [
  {
    id: 1,
    name: "Economy Car",
    agency: "MoroccoRide",
    image: "/car-economy.jpg",
    locations: ["Marrakech", "Casablanca", "Fez"],
    contact: "+212 5XX-XXXXXX",
  },
  {
    id: 2,
    name: "SUV",
    agency: "Atlas Rentals",
    image: "/car-suv.jpg",
    locations: ["Rabat", "Tangier", "Agadir"],
    contact: "+212 6XX-XXXXXX",
  },
  {
    id: 3,
    name: "Luxury Sedan",
    agency: "Royal Moroccan Cars",
    image: "/car-luxury.jpg",
    locations: ["Casablanca", "Marrakech", "Essaouira"],
    contact: "+212 7XX-XXXXXX",
  },
  // Add more car entries as needed
]

export default function Cars() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.locations.some((location) => location.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-4">Car Rentals in Morocco</h1>
      <div className="mb-4 flex">
        <Input
          type="text"
          placeholder="Search cars, agencies, or locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button onClick={() => setSearchTerm("")}>Clear</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{car.name}</CardTitle>
                <CardDescription>{car.agency}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="font-semibold">Available Locations:</p>
                <ul className="list-disc list-inside">
                  {car.locations.map((location, idx) => (
                    <li key={idx}>{location}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <p>Contact: {car.contact}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

