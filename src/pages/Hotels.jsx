"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const hotels = [
  { id: 1, name: "Riad Fes", location: "Fes", rating: 4.8 },
  { id: 2, name: "La Mamounia", location: "Marrakech", rating: 4.9 },
  { id: 3, name: "Mandarin Oriental", location: "Marrakech", rating: 4.7 },
  { id: 4, name: "Four Seasons Hotel Casablanca", location: "Casablanca", rating: 4.6 },
  { id: 5, name: "Sofitel Tamuda Bay Beach and Spa", location: "Tetouan", rating: 4.5 },
]

export default function Hotels() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hotels in Morocco</h1>
      <div className="mb-4 flex">
        <Input
          type="text"
          placeholder="Search hotels..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button onClick={() => setSearchTerm("")}>Clear</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="text-yellow-500">Rating: {hotel.rating}/5</p>
            <Button className="mt-2">Book Now</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

