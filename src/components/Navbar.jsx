import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-yellow-400 text-2xl font-bold">AW</Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none z-50">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <ul
        className={`absolute md:static top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
      >
        <li><Link to="/" className="text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/courses" className="text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Courses</Link></li>
        <li><Link to="/admin/login" className="text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Admin</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;