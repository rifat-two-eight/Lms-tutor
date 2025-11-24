"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";


const testimonials = [
  "/testi1.jpg",
  "/testi1.jpg",
  "/testi1.jpg",
  "/testi1.jpg",
  "/testi1.jpg",
  "/testi1.jpg",
  "/testi1.jpg",
];

const faqs = [
  {
    question: "Wie funktioniert die Online-Nachhilfe?",
    answer: "Die Online-Nachhilfe funktioniert ganz einfach über unsere digitale Plattform. Nach der Anmeldung können Schüler eine passende Lehrkraft auswählen, einen Termin vereinbaren und die Sitzung direkt online via Video-Call abhalten. Die Lernumgebung ist interaktiv mit Whiteboard, Bildschirmfreigabe und Chat-Funktionen ausgestattet, um den Unterricht möglichst effektiv zu gestalten.",
  },
  {
    question: "Welche Fächer bieten Sie an?",
    answer: "Wir bieten Nachhilfe in allen gängigen Schulfächern an: Mathematik, Physik, Chemie, Biologie, Deutsch, Englisch, Französisch, Latein, Geschichte und viele mehr – von der Grundschule bis zum Abitur.",
  },
  {
    question: "Was verdient ein Tutor?",
    answer: "Unsere Tutoren verdienen je nach Erfahrung und Fach zwischen 25–45 € pro Stunde. Je mehr positive Bewertungen und abgeschlossene Stunden, desto höher steigt der Stundensatz automatisch.",
  },
  {
    question: "Kann ich Stunden kurzfristig absagen?",
    answer: "Ja! Kostenfreie Stornierung ist bis 24 Stunden vor Unterrichtsbeginn möglich. Danach wird eine Ausfallgebühr von 50 % fällig – so schützen wir die Zeit unserer Tutoren.",
  },
  {
    question: "Wie flexibel sind die Unterrichtszeiten?",
    answer: "Sehr flexibel! Unterricht ist 7 Tage die Woche von 8:00 bis 22:00 Uhr möglich – auch am Wochenende und in den Ferien. Du entscheidest selbst, wann du lernen möchtest.",
  },
];

export default function Testimonial() {
  const [isHovered, setIsHovered] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const intervalRef = useRef(null);


  // Auto-slide every 3 seconds + pause on hover
  useEffect(() => {
    if (isHovered) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        document.getElementById("testimonial-track").style.transition = "transform 0.7s ease-in-out";
        document.getElementById("testimonial-track").style.transform = `translateX(-${(currentOffset + 1) * 160}px)`;
        setCurrentOffset(prev => prev + 1);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const [currentOffset, setCurrentOffset] = useState(0);

  // Reset when reaching end (infinite loop)
  useEffect(() => {
    if (currentOffset >= testimonials.length) {
      setTimeout(() => {
        document.getElementById("testimonial-track").style.transition = "none";
        document.getElementById("testimonial-track").style.transform = "translateX(0)";
        setCurrentOffset(0);
      }, 700);
    }
  }, [currentOffset]);

  return (
    <section className="w-full pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">

        {/* Testimonial Carousel – Right to Left Infinite */}
        <div className="text-center space-y-12">
          <img className="-mb-7 -ms-4 w-24" src="/comma.svg" alt="quote" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight">
            Education has <span className="text-[#0B31BD]">transformed how I study.</span> The on-demand lessons save me <span className="text-[#0B31BD]">hours every week without losing</span> quality
          </h2>

          {/* Infinite Sliding Track */}
          <div
            className="overflow-hidden py-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              id="testimonial-track"
              className="flex gap-8"
              style={{
                transform: `translateX(-${currentOffset * 160}px)`,
                transition: "transform 0.7s ease-in-out"
              }}
            >
              {/* Duplicate for infinite loop */}
              {[...testimonials, ...testimonials].map((src, index) => {
                const pos = index - currentOffset;
                const isCenter = pos === 3 || (pos === 3 - testimonials.length);

                return (
                  <div
                    key={`${src}-${index}`}
                    className={`flex-shrink-0 transition-all duration-700 ${
                      isCenter
                        ? "scale-125 -translate-y-8 shadow-xl z-10"
                        : "scale-90 opacity-60"
                    }`}
                  >
                    <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={src}
                        alt="Student"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
      </div>
      <section className="bg-[#FBFCFC]">
  <div className="max-w-4xl mx-auto py-16 space-y-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B31BD]">
        Häufig gestellte Fragen
      </h2>
      <p className="text-gray-600 mt-3">
        Alles, was du über unsere Nachhilfe wissen musst.
      </p>
    </div>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border-2 border-[#85C2DE] overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
          >
            <span className="font-medium text-gray-900 pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

    </section>
  );
}