"use client";
import React from 'react';
import { LogOut } from 'lucide-react';

const FreeStudentDash = () => {
  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="max-w-3xl mx-auto py-12 px-4">
        {/* Trial Session Request Card */}
        <div className=" rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Trial Session Request</h2>

          {/* Progress Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-300 z-0">
                <div className="h-full bg-[#0B31BD] w-1/3"></div>
              </div>

              {/* Step 1 - Active */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#0B31BD] flex items-center justify-center text-white font-semibold mb-2">
                  1
                </div>
                <span className="text-xs text-gray-700 text-center max-w-[80px]">
                  Tutor Matches request
                </span>
              </div>

              {/* Step 2 - Pending */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold mb-2">
                  2
                </div>
                <span className="text-xs text-gray-600 text-center max-w-[80px]">
                  Trial Session
                </span>
              </div>

              {/* Step 3 - Pending */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold mb-2">
                  3
                </div>
                <span className="text-xs text-gray-600 text-center max-w-[80px]">
                  Start Learning
                </span>
              </div>
            </div>
          </div>

          {/* Status Message */}
          <div className="bg-[#FFF8E1] border-l-4 border-[#FFA726] p-4 rounded">
            <p className="text-gray-800 font-medium">
              Your request has been sent and we are now looking for a fitting tutor.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              You will be notified once we found your tutor
            </p>
          </div>
        </div>

        {/* Request Summary Card */}
        <div className=" rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Request Summary</h3>

          <div className="space-y-4">
            {/* Name and School Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="text-gray-800 font-medium">David Chen</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">School Type</p>
                <p className="text-gray-800 font-medium">Gymnasium</p>
              </div>
            </div>

            {/* Subjects and Grade */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Subjects</p>
                <p className="text-gray-800 font-medium">Math</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Grade</p>
                <p className="text-gray-800 font-medium">11th grade</p>
              </div>
            </div>

            {/* Learning Goals */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Learning goals</p>
              <p className="text-gray-800">
                Prepare for upcoming final exams and improve understanding of advanced concepts
              </p>
            </div>
          </div>
        </div>

        {/* Info Message */}
        <div className="border bg-[#E2E6F5] border-[#0B31BD] rounded-lg p-4">
          <p className="text-[#0B31BD]  text-sm">
            You can return to this page at any time to check the progress of your application by login.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeStudentDash;