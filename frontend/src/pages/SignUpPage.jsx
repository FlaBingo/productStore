import { Center } from '@chakra-ui/react'
import { useAuthStore } from '../store/authStore.js'
import { ArrowRightIcon, Loader, Lock, Mail, UserIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const { signup, isLoading, message } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(name, email, password)
            const success = await signup(name, email, password);
            if (success) {
                navigate("/verify-email", {replace: true})
                toast.success(message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center text-black justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
            style={{padding: "15px"}}>

                <div className="mb-8 text-center">
                    <h1 style={{fontSize: "1.5em", fontWeight: "bold"}} className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
                    <p className="text-gray-500">Join our community and get started</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <div>

                            <label htmlFor='username' className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <div className="flex">
                                <UserIcon size={30} />
                                <input
                                    type="text" id='username'
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                    style={{ marginLeft: "10px", padding: "5px 7px" }}
                                    placeholder="John"
                                    // required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                        </div>
                        <br />
                        <div>
                            <label htmlFor='email' className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <div className="flex">
                                <Mail size={30} />
                                <input
                                    type="email" id='email'
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                    style={{ marginLeft: "10px", padding: "5px 7px" }}
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
                                <Lock size={30} />
                                <input
                                    type="password" id='password'
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                    style={{ marginLeft: "10px", padding: "5px 7px" }}
                                    placeholder="••••••••" 
                                    // required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="terms" style={{marginLeft: "7px"}} className="ml-2 text-sm text-gray-600">
                            I agree to the{' '}
                            <a href="#" className="text-indigo-600 hover:underline">
                                Terms of Service
                            </a>
                        </label>
                    </div>

                    <div
                        style={{
                            display:"flex",
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
                                width: "30%",
                                padding: "5px 10px",
                                color: "white",
                                textAlign: "center"
                            }}
                        >
                            {isLoading ? <Loader className="animate-spin" /> : "Create Account"}
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
                        Already have an account?{' '}
                        <Link to="/login">
                            <span className='underline'>Log in</span>
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default SignupPage