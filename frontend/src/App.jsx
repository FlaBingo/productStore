import { useEffect, useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Navigate, replace, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from "./pages/CreatePage.jsx"
import { useColorModeValue } from './components/ui/color-mode.jsx'
import { Toaster } from './components/ui/toaster.jsx';
import { Toaster as Bread } from 'react-hot-toast'

import { useAuthStore } from './store/authStore.js'
import { Loader } from 'lucide-react'

import UpdatePage from './pages/UpdatePage'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import VerifyEmail from './pages/VerifyEmail'
import HowItWorksPage from './pages/HowItWorksPage'
import Footer from './components/Footer'


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (user && !user.isVerified) return <Navigate to="verify-email" replace />;
  return children;
}




function App() {

  const { user, checkAuth, isCheckingAuth } = useAuthStore();
  console.log(user)
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center", alignItems: "center"
  }}>
    <Loader size={30} />
  </div>

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        {user && <Navbar />}
        <Routes>
          <Route path='/' element={user ? <HomePage replace /> : <LandingPage replace />} />
          <Route path='/signup' element={!user ? <SignUpPage replace /> : <Navigate to="/" replace />} />
          <Route path='/login' element={!user ? <LoginPage replace /> : <Navigate to="/" replace />} />
          <Route path='/how-it-works' element={!user ? <HowItWorksPage replace/> : <Navigate to="/" replace />} />
          <Route path='/verify-email' element={!user?.isVerified ? <VerifyEmail replace /> : <Navigate to='/' replace />} />
          <Route path='/create' element={user?.isVerified ? <CreatePage replace /> : <Navigate to='/' replace />} />
          <Route path='/update' element={user?.isVerified ? <UpdatePage replace /> : <Navigate to='/' replace />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Box>
      {user && <Footer />}
      <Toaster />
      <Bread />
    </>
  )
}

export default App
