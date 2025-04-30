import { Loader, Lock, Mail } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {

  const [otp, setOTP] = useState();
  const { verifyEmail, message, user, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    try {
      const success = await verifyEmail(otp);
      if(success){
        toast.success("Email Verified Successfully")
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='w-full h-screen bg-gray-700 text-black flex justify-center items-center'>
      <div className='w-[90%] sm:w-[40%] bg-gray-100 rounded-lg flex flex-col justify-center items-center'
        style={{
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "1.3em",
            fontWeight: "bold",
            padding: "5px",
          }}
        >Verify Your Email</h1>
        <p>If there exist an email as <span style={{fontWeight: "bold"}}>{ user?.email }</span> Check your Mail Box for OTP</p>
        <br />


        <form onSubmit={handleVerifyEmail} 
        style={{
          width: "80%",
          background: "black",
          padding: "20px",
          borderRadius: "10px",
          color: "white"
        }}>

          <div style={{
            background: "black"
          }}>
            <label htmlFor='otp' style={{padding: "10px 0"}} className="block text-sm font-medium mb-2">OTP</label>
            <div className="flex">
              <Lock size={30} />
              <input
                type="number" id='otp'
                min={100000}
                max={999999}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                style={{ marginLeft: "10px", padding: "5px 7px" }}
                placeholder="Enter your otp" required
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {message && (
              <div style={{ padding: "5px" }} className='h-0.5 text-red-500'>
                {message}
              </div>
            )}
            <button
              type="submit"
              className="cursor-pointer"
              style={{
                background: "#51a2ff",
                margin: "30px",
                fontSize: "1.1em",
                borderRadius: "5px",
                width: "70%",
                padding: "5px 10px",
                color: "white",
                textAlign: "center"
              }}
            >
              {isLoading ? <Loader className="animate-spin" /> : "Verify"}
              {/* <ArrowRightIcon className="w-5 h-5" /> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyEmail