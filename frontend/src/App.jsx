import { useState } from 'react'
import './App.css'
import { Box, Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from "./pages/CreatePage.jsx"
import { useColorModeValue } from './components/ui/color-mode.jsx'
import { Toaster } from './components/ui/toaster.jsx';
import UpdatePage from './pages/UpdatePage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/update' element={<UpdatePage />} />
        </Routes>
      </Box>
      <Toaster/>
    </>
  )
}

export default App
