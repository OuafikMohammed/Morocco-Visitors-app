import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    // Here you would typically handle the logout logic
    console.log("User logged out")
    // For now, we'll just redirect to the home page after a short delay
    const timer = setTimeout(() => {
      navigate("/")
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Logging out...</h1>
      <p>You will be redirected to the home page shortly.</p>
    </div>
  )
}

