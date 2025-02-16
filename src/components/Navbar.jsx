import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-yellow-400 text-2xl font-bold">AW</Link>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white md:hidden focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
          <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block absolute md:relative bg-gray-800 md:bg-transparent left-0 w-full md:w-auto text-center md:text-left mt-4 md:mt-0 p-4 md:p-0`}>          
            <li><Link to="/" className="text-white hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-yellow-400">About</Link></li>
            <li><Link to="/courses" className="text-white hover:text-yellow-400">Courses</Link></li>
            <li><Link to="/admin/login" className="text-white hover:text-yellow-400">Admin</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
  export default Navbar;