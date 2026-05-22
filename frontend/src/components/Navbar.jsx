import { useState } from "react"
import {FiMenu, FiX} from 'react-icons/fi'
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-200 shadow">
    <div className="flex justify-between items-center px-6 h-16 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Arun Kumar</h1>
   
        <ul className="hidden md:flex items-center gap-6"> 
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="/projects">Projects</Link></li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
          <li>
            <a href="/ARUN_RESUME_2.pdf" download>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Download CV
              </button>
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <span className="text-2xl"><FiX/></span>
            ): (
              <span className="text-2xl"><FiMenu/></span>
            )}
          </button>
        </div>
    </div>

    {isOpen && (
      <div className="md:hidden px-6 pb-4 transition-all duration-300">
        <ul className="flex flex-col gap-4">
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="/projects">Projects</Link></li>
          <li className="cursor-pointer hover:text-blue-500">contact</li>
          <li>
            <a href="/ARUN_RESUME_2.pdf" download>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Download CV
              </button>
            </a>
          </li>
        </ul>
      </div>
    )}
    </nav>
  )
}

export default Navbar