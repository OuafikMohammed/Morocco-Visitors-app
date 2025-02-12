import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { UserContext } from "../contexts/UserContext"
import { useToast } from "@/hooks/use-toast"
import { useGoogleLogin } from "@react-oauth/google"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Simulating a login API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ ok: true, json: () => ({ id: "1", name: "Test User", email, plan: "basic" }) })
        }, 1000)
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
        toast({
          title: "Success",
          description: "Logged in successfully!",
        })
        setTimeout(() => navigate("/"), 2000)
      } else {
        toast({
          title: "Error",
          description: "Login failed. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async () => {
      try {
        // Simulating a Google login API call
        const userInfo = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              id: "2",
              name: "Google User",
              email: "google@example.com",
              picture: "https://example.com/avatar.jpg",
              plan: "basic",
            })
          }, 1000)
        })
        setUser(userInfo)
        toast({
          title: "Success",
          description: "Logged in successfully with Google!",
        })
        setTimeout(() => navigate("/"), 2000)
      } catch (error) {
        toast({
          title: "Error",
          description: "Google login failed. Please try again.",
          variant: "destructive",
        })
        console.log(error)
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Google login failed. Please try again.",
        variant: "destructive",
      })
    },
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
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
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="mt-4">
            <Button
              onClick={() => googleLogin()}
              variant="outline"
              className="w-full flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              <span>Continue with Google</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center w-full">
            Don&rsquo;t have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

