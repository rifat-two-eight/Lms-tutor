"use client"

export default function Funcard() {
  return (
    <>
        <section className="w-full py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">94%</p>
            <p className="text-sm sm:text-base text-gray-700 font-medium mt-1">Erfolgsrate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">2500+</p>
            <p className="text-sm sm:text-base text-gray-700 font-medium mt-1">Materialien</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">3,40</p>
            <p className="text-sm sm:text-base text-gray-700 font-medium mt-1">Stunden/Monat</p>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">So funktioniert's</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Lernerfolg definieren, wir finden deine passende Lernkraft.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 - Pink */}
          <div className="flex flex-col">
            <div className="bg-white rounded-lg h-[466px] overflow-hidden shadow-sm border border-gray-200">
              <div className="p-6">
                <p className="text-blue-600 font-bold text-lg mb-2">1.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">To request</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tell us which subject you need help with and when
                </p>
              </div>
              <div className="h-48 sm:h-56 bg-pink-300 overflow-hidden">
                <img src="/boy1.png" alt="Boy with tablet" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Card 2 - Yellow */}
          <div className="flex flex-col">
            <div className="bg-white rounded-lg h-[466px] overflow-hidden shadow-sm border border-gray-200">
              <div className="p-6">
                <p className="text-blue-600 font-bold text-lg mb-2">2.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">To get to know</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We'll connect you with the right teacher.</p>
              </div>
              <div className="h-48 sm:h-56 bg-yellow-300 overflow-hidden">
                <img src="/girl1.png" alt="Girl raising hands" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Card 3 - Green */}
          <div className="flex flex-col">
            <div className="bg-white rounded-lg h-[466px] overflow-hidden shadow-sm border border-gray-200">
              <div className="p-6">
                <p className="text-blue-600 font-bold text-lg mb-2">3.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get started</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Improve your grades and build confidence.</p>
              </div>
              <div className="h-48 sm:h-56 bg-green-300 overflow-hidden">
                <img
                  src="/girl2.png"
                  alt="Confident girl student"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-white py-16 lg:py-24">
      <div className=" px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image with blue background shape */}
          <div className="flex justify-center relative h-96 sm:h-80 lg:h-96">
            {/* Blue background shape */}
            <div className="absolute inset-0 rounded-full w-72 h-72 sm:w-80 sm:h-80 mx-auto lg:ml-0"></div>

            {/* Student image */}
            <img
              src="/boy2.png"
              alt="Student with tablet"
              className="relative z-10 rounded-full object-cover w-[600px] h-[600px] sm:w-80 sm:h-80"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">Unser Ansatz</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 leading-tight">
              Erfahrene Tutoren, persönlich & individuell
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Wir finden den passenden Lehrer– jemand, der zuhört, versteht und den Lernstil berücksichtigt. Mit einem
              individuellen Lernplan verbessern sich Noten schneller, und das Selbstvertrauen im Unterricht wächst.
            </p>

            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Tutor finden
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
