import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { UserContext } from "../contexts/UserContext"
import { User } from "lucide-react"

export default function Navbar() {
  const { user } = useContext(UserContext)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center ml-16 lg:ml-0">
              <Link to="/" className="text-2xl lg:text-2xl font-bold text-blue-600 sm:ml-15 md:ml-5  lg:hidden xl:hidden">
                MoroccoVisit
              </Link>
            </div>
          </div>
          <div className=" ml-6 flex items-center">
            {user ? (
              <div className="flex items-center">
                <span className="mr-2">{user.plan} Plan</span>
                <Link to="/profile">
                  <User className="h-8 w-8 text-blue-600" />
                </Link>
              </div>
            ) : (
              <>
                <Button asChild className="mr-2 bg-slate-50 text-black">
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button asChild variant="outline" className="bg-black text-slate-50">
                  <Link to="/login">Login</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

