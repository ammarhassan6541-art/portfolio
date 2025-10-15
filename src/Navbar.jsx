import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-6 z-20 backdrop-blur-md bg-white/5 border-b border-[#9333ea]/40  text-white">
      <h1 className="text-3xl font-extrabold tracking-wider text-[#c084fc]">
        Ammar<span className="text-white">.</span>
      </h1>

      <ul className="flex gap-10 text-lg font-medium">
        {navItems.map((item, i) => (
          <li key={i} className="relative group">
            <Link
              to={item.path}
              className="cursor-pointer hover:text-[#c084fc] transition-all duration-300"
            >
              {item.name}
            </Link>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#c084fc] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
