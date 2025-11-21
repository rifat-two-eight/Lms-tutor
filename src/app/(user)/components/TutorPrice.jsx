"use client"

import { useState } from "react"

const TutorPrice = () => {
  const [currentTutorIndex, setCurrentTutorIndex] = useState(0)

  const tutors = [
    {
      id: 1,
      name: "Luca",
      rating: 4.9,
      specialization: "Soziologie TU Berlin",
    },
    {
      id: 2,
      name: "Diego",
      rating: 4.9,
      specialization: "Soziologie TU Berlin",
    },
    {
      id: 3,
      name: "Yumi",
      rating: 5,
      specialization: "Soziologie TU Berlin",
    },
    {
      id: 4,
      name: "Lisa",
      rating: 5,
      specialization: "Soziologie TU Berlin",
    },
  ]

  const pricingPlans = [
    {
      id: 1,
      name: "Flexibel",
      pricePerHour: "30€",
      courseDuration: "Keine",
      selectedHours: "Anzahl wählbar",
      selectedHoursDetails: "Min. Stundenppaket",
      termDetails: "Flexibel",
      termType: "Flexibel oder regelmäßig",
      inclusions: ["Kurs-Anforderungen Unterstützung", "Prüfungsvorbereitung"],
    },
    {
      id: 2,
      name: "Regelmäßig",
      pricePerHour: "28€",
      courseDuration: "1 Monat",
      selectedHours: "Anzahl wählbar",
      selectedHoursDetails: "Min. 4 Stunden pro Monat",
      termDetails: "Flexibel oder regelmäßig",
      termType: "Flexibel oder regelmäßig",
      inclusions: ["Unterstützung bei Hausaufgaben", "Unterrichtsbegleitung"],
    },
    {
      id: 3,
      name: "Langfristig",
      pricePerHour: "25€",
      courseDuration: "3 Monate",
      selectedHours: "Anzahl wählbar",
      selectedHoursDetails: "Min. 4 Stunden pro Monat",
      termDetails: "Flexibel oder regelmäßig",
      termType: "Flexibel oder regelmäßig",
      inclusions: ["Langfristige Unterstützung", "Grundlagenwiederholen"],
    },
  ]

  const handlePrevTutor = () => {
    setCurrentTutorIndex((prev) => (prev - 1 + tutors.length) % tutors.length)
  }

  const handleNextTutor = () => {
    setCurrentTutorIndex((prev) => (prev + 1) % tutors.length)
  }

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      {/* Tutors Carousel */}
      <div className="mb-20">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevTutor}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Previous tutor"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex overflow-hidden gap-6 justify-center flex-wrap">
            {tutors.map((tutor, index) => (
              <div
                key={tutor.id}
                className={`transition-opacity duration-300 ${
                  index === currentTutorIndex ? "opacity-100" : "opacity-30"
                }`}
              >
                <div className="bg-gray-200 rounded-3xl p-1 w-48 h-64 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center">
                    <span className="text-white text-sm">Tutor Image</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-blue-600">{tutor.name}</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-sm font-semibold text-gray-800">{tutor.rating}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{tutor.specialization}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNextTutor}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Next tutor"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Preise</h2>
          <p className="text-gray-600 text-lg">Flexible Tarife für jedes Lernziel, inklusive kostenloser</p>
          <p className="text-gray-600 text-lg">Probestunde.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold text-center">{plan.name}</h3>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs text-gray-500">Preis pro Stunde</p>
                  <p className="text-2xl font-bold text-gray-900">{plan.pricePerHour}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Laufzeit</p>
                  <p className="text-sm font-semibold text-gray-900">{plan.courseDuration}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Einheiten</p>
                  <p className="text-sm font-semibold text-gray-900">{plan.selectedHours}</p>
                  <p className="text-xs text-gray-600 mt-1">{plan.selectedHoursDetails}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Terminabsprache</p>
                  <p className="text-sm font-semibold text-gray-900">{plan.termType}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Enthalten in</p>
                  <ul className="mt-2 space-y-1">
                    {plan.inclusions.map((inclusion, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        • {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition">
            Kostenlose Probestunde
          </button>
        </div>
      </div>
    </section>
  )
}

export default TutorPrice
