import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center shadow-md">
          <h1 className="text-2xl font-semibold">AW</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 transition duration-300">About</Link></li>
            <li><Link to="/courses" className="hover:text-gray-400 transition duration-300">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link></li>
            <li><Link to="/admin/login" className="hover:text-gray-400 transition duration-300">Admin</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;