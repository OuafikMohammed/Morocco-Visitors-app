"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const places = [
  {
    id: 1,
    name: "Hassan II Mosque",
    location: "Casablanca",
    image: "/hassan-ii-mosque.jpg",
    likes: 1200,
    comments: [
      { user: "traveler123", text: "Absolutely stunning architecture!" },
      { user: "moroccolover", text: "A must-visit place in Casablanca." },
    ],
  },
  {
    id: 2,
    name: "Jardin Majorelle",
    location: "Marrakech",
    image: "/jardin-majorelle.jpg",
    likes: 1500,
    comments: [
      { user: "botanicfan", text: "The colors are so vibrant and beautiful!" },
      { user: "artlover", text: "Yves Saint Laurent's influence is evident." },
    ],
  },
  // Add more places...
]

function PlaceCard({ place }) {
  const [isLiked, setIsLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState("")

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      // In a real app, you would add the comment to the backend here
      console.log("New comment:", newComment)
      setNewComment("")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border rounded-lg overflow-hidden shadow-md"
    >
      <img src={place.image || "/placeholder.svg"} alt={place.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{place.name}</h2>
        <p className="text-gray-600">{place.location}</p>
        <div className="flex items-center mt-2">
          <button onClick={handleLike} className="flex items-center mr-4">
            <Heart className={`mr-1 ${isLiked ? "text-red-500" : "text-gray-500"}`} />
            <span>{isLiked ? place.likes + 1 : place.likes}</span>
          </button>
          <button onClick={() => setShowComments(!showComments)} className="flex items-center">
            <MessageCircle className="mr-1 text-gray-500" />
            <span>{place.comments.length}</span>
          </button>
        </div>
        {showComments && (
          <div className="mt-4">
            {place.comments.map((comment, index) => (
              <div key={index} className="mb-2">
                <span className="font-semibold">{comment.user}: </span>
                <span>{comment.text}</span>
              </div>
            ))}
            <div className="mt-2 flex">
              <Input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mr-2"
              />
              <Button onClick={handleAddComment}>Post</Button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function ToVisit() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Places to Visit in Morocco</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  )
}

