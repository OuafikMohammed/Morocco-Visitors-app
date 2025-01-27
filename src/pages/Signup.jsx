import React, { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { UserContext } from "../contexts/UserContext"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Label } from "../components/ui/label"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("visitor")
  const [plan, setPlan] = useState("free")
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically handle the signup logic and Stripe integration
    console.log("Sign up attempt with:", email, password, userType, plan)

    // Simulate successful signup
    setUser({ email, userType, plan })
    navigate("/")
  }

  const visitorPlans = [
    { value: "free", label: "Free Plan" },
    { value: "basic", label: "Basic Plan ($15/month)" },
    { value: "premium", label: "Premium Plan ($25/month)" },
  ]

  const serviceProviderPlans = [
    { value: "basic", label: "Basic Plan ($199/month)" },
    { value: "premium", label: "Premium Plan ($399/month)" },
  ]

  const currentPlans = userType === "visitor" ? visitorPlans : serviceProviderPlans

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
              <RadioGroup value={userType} onValueChange={setUserType} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="visitor" id="visitor" />
                  <Label htmlFor="visitor">Visitor</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="serviceProvider" id="serviceProvider" />
                  <Label htmlFor="serviceProvider">Service Provider</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Select Plan</label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                {currentPlans.map((plan) => (
                  <option key={plan.value} value={plan.value}>
                    {plan.label}
                  </option>
                ))}
              </select>
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center w-full">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

