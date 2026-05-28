import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './pages/Projects'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <Toaster/>
    </div>
  )
}

export default App
