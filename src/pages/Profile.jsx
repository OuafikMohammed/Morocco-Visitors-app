import React, { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"

export default function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {user.email}</p>
          <p>Subscription Plan: {user.plan}</p>
        </CardContent>
      </Card>
    </div>
  )
}

