import { useState } from "react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 h-16 max-w-6xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">Arun Kumar</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">Projects</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
          <li>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Download CV
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              // Close Icon
              <span className="text-2xl">✖</span>
            ) : (
              // Hamburger Icon
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 transition-all duration-300">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">Projects</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
            <li>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Download CV
              </button>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar2;