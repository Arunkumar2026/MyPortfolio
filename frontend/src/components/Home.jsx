import { TypeAnimation } from 'react-type-animation';
import { PiHandWavingBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto py-10 px-6 gap-10">
        <div className='text-center md:text-left space-y-4'>
          <h1 className='text-4xl md:text-left font-bold leading-tight'>
            Hi, I'm <span className='text-blue-500'>Arun</span>
          </h1>

          <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "MERN Developer",
                1500
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className='text-gray-500 max-w-lg'>I build modern, scalable, and user-friendly web applications.</p>

          <div className='flex justify-center md:justify-start gap-4 pt-2'>
            <button className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>
              <Link to="/projects">View Projects</Link>
            </button>

            <button className='px-6 py-3 border rounded-lg hover:bg-gray-100 transition'>
              Contact Me
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <img className='w-64 md:w-80 lg:w-96 rounded-2xl shadow-lg object-cover' src="/PortfolioArunImage.png" alt="Image Not Found..." />
        </div>
    </div>
    
  )
}

export default Home