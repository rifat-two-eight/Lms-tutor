"use client"

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#2347CC] to-[#3A65FF] relative">
        
      <div className="h-full md:h-[749px] flex items-center relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Finde deinen Online-Tutor
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Einfach Fach angeben – wir verbinden dich mit der passenden Lehrkraft.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Find Tutor
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Free Trial
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="block absolute right-0 bottom-0">
              <img src="/girl-student.png" alt="Girl student" className="w-full h-full object-cover object-bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
