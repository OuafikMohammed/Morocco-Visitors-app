"use client"

import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import { useToast } from "@/hooks/use-toast"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"

export default function Logout() {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const { toast } = useToast()

  useEffect(() => {
    // Clear the user data
    setUser(null)

    // Show a toast notification
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    })

    // Redirect to the home page after a short delay
    const timer = setTimeout(() => {
      navigate("/")
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate, setUser, toast])

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Logging Out</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">You will be redirected to the home page shortly.</p>
        </CardContent>
      </Card>
    </div>
  )
}

