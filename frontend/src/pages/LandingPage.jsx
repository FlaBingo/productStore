import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className=" bg-amber-200 text-2xl flex justify-between text-black items-center">
        <div className="text-2xl px-3.5 font-bold">Logo</div>
        <div className="flex justify-between ">
            <Link to="/login" className='cursor-pointer'>
              Log In
            </Link>
            <Link to="/signup" className='cursor-pointer'>
              Sign Up
            </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-indigo-600">Our Platform</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          A simple solution for your needs. Get started today and experience the difference.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="App preview"
            className="rounded-md w-full h-auto"
          />
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;