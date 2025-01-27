import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { UserProvider } from "./contexts/UserContext"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hotels from "./pages/Hotels"
import Cars from "./pages/Cars"
import ToVisit from "./pages/To-visit"
import Map from "./pages/Maps"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import Logout from "./pages/Logout"

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/to-visit" element={<ToVisit />} />
                <Route path="/map" element={<Map />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </UserProvider>
  )
}
export default App;