import {FiMenu, FiX} from 'react-icons/fi';
import { useState } from 'react';

const Navbar3 = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='bg-white shadow-lg'>
        <div className='flex justify-between items-center h-16 max-w-6xl mx-auto px-6'>
            <h1>Arun Kumar</h1>

            <ul className="hidden md:flex items-center gap-6">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>
                    <button className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-600 transition duration-300">
                        Download CV 
                    </button>
                </li>
            </ul>

            <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 
                (<span className='text-2xl'><FiX/></span>)
                :
                (<span className='text-2xl'><FiMenu/></span>)
            }
            </button>
            </div>
        </div>

        {isOpen && (
            <div className='md:hidden px-6 pb-4'>
                <ul className="flex flex-col gap-4">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>
                        <button className="bg-blue-500 w-full text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-600 transition duration-300">
                            Download CV 
                        </button>
                    </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar3