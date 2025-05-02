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

import UpdatePage from './pages/UpdatePage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import SignUpPage from './pages/SignupPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import VerifyEmail from './pages/VerifyEmail.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import Footer from './components/Footer.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'


function App() {

  const { user, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return (<div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center", alignItems: "center"
  }}>
    <Loader size={30} />
  </div>)

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        {user?.isVerified && <Navbar />}
        <Routes>
          <Route path='/' element={(user && user?.isVerified) ? <HomePage /> : <LandingPage replace />} />

          <Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to="/" replace />} />

          <Route path='/login' element={!user ? <LoginPage /> : <Navigate to="/" replace />} />

          <Route path='/forgot-password' element={!user ? <ForgotPassword /> : <Navigate to="/" replace />} />

          <Route path='/reset-password/:token' element={!user ? <ResetPassword /> : <Navigate to="/" replace />} />

          <Route path='/how-it-works' element={!user ? <HowItWorksPage /> : <Navigate to="/" replace />} />

          <Route path='/verify-email' element={!user?.isVerified ? <VerifyEmail /> : <Navigate to='/' replace />} />

          <Route path='/create' element={user?.isVerified ? <CreatePage /> : <Navigate to='/' replace />} />

          <Route path='/update' element={user?.isVerified ? <UpdatePage /> : <Navigate to='/' replace />} />

          <Route path='*' element={<Navigate to='/' replace />} />

        </Routes>
      </Box>
      {user?.isVerified && <Footer />}
      <Toaster />
      <Bread />
    </>
  )
}

export default App
