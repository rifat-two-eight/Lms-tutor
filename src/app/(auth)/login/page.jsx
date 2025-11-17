'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberPassword: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your signup logic here
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Background image with content */}
      <div className="hidden w-1/2 relative lg:flex items-center justify-start">
        <Image
          src="/teacher.png"
          alt="Teacher with background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 px-12 text-white mt-60 ml-10">
          <h1 className="text-6xl font-semibold leading-relaxed mb-6">
            Your Teaching, Your <br /> Schedule, Your Impact
          </h1>
          <p className="text-xl -mt-5 leading-relaxed">
            Log in to manage your classes, connect with students, and <br /> track your tutoring sessions—all in one place.
          </p>
        </div>
      </div>

      {/* Right side - Signup form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8">
        <div className="w-[600px] border-2 border-[#E7E7E7] rounded-xl px-8 py-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Login to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Remember Password & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberPassword"
                  checked={formData.rememberPassword}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                />
                <span className="ml-2 text-sm font-medium text-gray-500">Remember Password</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#062183] hover:text-[#092a9e] underline font-medium">
                Forgot Password
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#0B31BD] hover:bg-[#092a9e] text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-center font-medium text-gray-600">
              If have an account?{' '}
              <Link href="/signup" className="text-[#0B31BD] hover:text-[#092a9e] font-semibold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
