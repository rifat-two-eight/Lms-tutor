'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    street: '',
    zipCode: '',
    city: '',
    country: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Form submitted:', formData);
      // Handle final submission
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Background image */}
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

      {/* Right side - Application form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-2xl">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Teacher Application</h1>
            <div className="flex gap-2">
              <div className={`h-2 flex-1 rounded-full transition-all ${currentStep >= 1 ? 'bg-[#0B31BD]' : 'bg-gray-300'}`}></div>
              <div className={`h-2 flex-1 rounded-full transition-all ${currentStep >= 2 ? 'bg-[#0B31BD]' : 'bg-gray-300'}`}></div>
              <div className={`h-2 flex-1 rounded-full transition-all ${currentStep >= 3 ? 'bg-[#0B31BD]' : 'bg-gray-300'}`}></div>
            </div>
          </div>

          {/* Step 1 - Personal Information */}
          {currentStep === 1 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
                <p className="text-gray-600 mb-6">Please fill out all fields completely and truthfully.</p>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-900 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your name"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your email"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your email"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-900 mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    placeholder="Enter your email"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-900 mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    placeholder="Enter your email"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-900 mb-2">
                    Street / No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Enter your email"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-900 mb-2">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="Enter your email"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your email"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter your email"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your password"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Re-enter your password"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B31BD] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B31BD] hover:bg-[#092a9e] text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Next Step
              </button>
            </form>
          )}

          {/* Step 2 - Professional Background */}
          {currentStep === 2 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional Background</h2>
                <p className="text-gray-600 mb-6">Tell us about your teaching experience.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B31BD] hover:bg-[#092a9e] text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Next Step
              </button>
              <button
                type="button"
                onClick={handlePreviousStep}
                className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition duration-200"
              >
                Back
              </button>
            </form>
          )}

          {/* Step 3 - Review */}
          {currentStep === 3 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Application</h2>
                <p className="text-gray-600 mb-6">Please review your information before submitting.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B31BD] hover:bg-[#092a9e] text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Submit Application
              </button>
              <button
                type="button"
                onClick={handlePreviousStep}
                className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition duration-200"
              >
                Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
