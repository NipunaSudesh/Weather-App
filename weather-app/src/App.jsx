import './App.css'
import { BackGroundLayout } from './Components/BackGroundLayout'
import { NavBar } from './Components/NavBar'

function App() {
 

  return (
    <>
    <div className='w-full h-screen text-white px-8'>
    <div className='flex flex-col gap-4 p-2'>
      <NavBar />
      <BackGroundLayout />
    </div>
    </div>
    </>
  )
}

export default App
