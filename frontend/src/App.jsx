import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <main className='flex-1'>
        <Home/>
      </main>
      <Toaster/>
    </div>
  )
}

export default App
