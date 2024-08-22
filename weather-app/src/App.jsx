import './App.css'
import { BackGroundLayout } from './Components/BackGroundLayout'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'

function App() {
 

  return (
    <>
    <div className='w-full h-screen text-white px-8'>
    <div className='flex flex-col gap-4 p-2'>
      <NavBar />
      <BackGroundLayout />
      <Home />
    </div>
    </div>
    </>
  )
}

export default App
