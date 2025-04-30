import { useAuthStore } from '../store/authStore';
import { Loader, Lock, Mail } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isLoading, message } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(email, password);
      if(success){
        toast.success("Logged In Successfully")
        window.location.reload();
        navigate('/', {replace: true});
      }
    } catch (error) {
      console.log("Error in LoginPage", error.message)
    }
  }




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center text-black justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
      style={{padding: "15px"}}
      >

        <div className="mb-8 text-center">
          <h1 style={{fontSize: "1.5em", fontWeight: "bold"}} className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
          <p className="text-gray-500">Join our community and get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>

            <br />
            <div>
              <label htmlFor='email' className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="flex">
                <Mail size={30}/>
                <input
                  type="email" id='email'
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  style={{marginLeft: "10px", padding: "5px 7px"}}
                  placeholder="john@example.com" 
                  // required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div>
              <label htmlFor='password' className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="flex">
                <Lock size={30}/>
                <input
                  type="password" id='password'
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  style={{marginLeft: "10px", padding: "5px 7px"}}
                  placeholder="••••••••" 
                  // required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <br />

          <Link to={"/forgot-password"}>
          <div className="flex items-center underline cursor-pointer">
            forgot password?
          </div>
          </Link>
          <div
          style={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
          >
            {message && (
              <div style={{padding:"5px"}} className='h-0.5 text-red-500'>
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
                width:"30%",
                padding:"5px 10px",
                color: "white",
                textAlign: "center"
              }}
            >
              {isLoading ? <Loader className="animate-spin" /> : "Log In"}
              {/* <ArrowRightIcon className="w-5 h-5" /> */}
            </button>
          </div>

        </form>
        <br />
        <div className="mt-2 flex gap-1">
          {['bg-red-500', 'bg-yellow-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
            <div key={i} className={`h-1 w-full rounded-full ${color}`} />
          ))}
        </div>
        <br />
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>



          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup">
              <span className='underline'>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default LoginPage