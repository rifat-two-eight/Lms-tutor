"use client";

import { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";

const testimonials = [
  "/testimonial-1.jpg",
  "/testimonial-2.jpg",
  "/testimonial-3.jpg",
  "/testimonial-4.jpg",
  "/testimonial-5.jpg",
  "/testimonial-6.jpg",
  "/testimonial-7.jpg",
];

const faqs = [
  {
    question: "Wie funktioniert die Online-Nachhilfe?",
    answer:
      "Die Online-Nachhilfe funktioniert ganz einfach über unsere digitale Plattform. Nach der Anmeldung können Schüler eine passende Lehrkraft auswählen, einen Termin vereinbaren und die Sitzung direkt online via Video-Call abhalten. Die Lernumgebung ist interaktiv mit Whiteboard, Bildschirmfreigabe und Chat-Funktionen ausgestattet, um den Unterricht möglichst effektiv zu gestalten.",
  },
  {
    question: "Welche Fächer bieten Sie an?",
    answer:
      "Wir bieten Nachhilfe in allen gängigen Schulfächern an: Mathematik, Physik, Chemie, Biologie, Deutsch, Englisch, Französisch, Latein, Geschichte und viele mehr – von der Grundschule bis zum Abitur.",
  },
  {
    question: "Was verdient ein Tutor?",
    answer:
      "Unsere Tutoren verdienen je nach Erfahrung und Fach zwischen 25–45 € pro Stunde. Je mehr positive Bewertungen und abgeschlossene Stunden, desto höher steigt der Stundensatz automatisch.",
  },
  {
    question: "Kann ich Stunden kurzfristig absagen?",
    answer:
      "Ja! Kostenfreie Stornierung ist bis 24 Stunden vor Unterrichtsbeginn möglich. Danach wird eine Ausfallgebühr von 50 % fällig – so schützen wir die Zeit unserer Tutoren.",
  },
  {
    question: "Wie flexibel sind die Unterrichtszeiten?",
    answer:
      "Sehr flexibel! Unterricht ist 7 Tage die Woche von 8:00 bis 22:00 Uhr möglich – auch am Wochenende und in den Ferien. Du entscheidest selbst, wann du lernen möchtest.",
  },
];

export default function Testimonial() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

        {/* Testimonials */}
        <div className="text-center space-y-8">
          <Quote className="w-12 h-12 text-gray-300 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Education has transformed how I study. The on-demand lessons save me hours every week without losing quality
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {testimonials.map((src, i) => (
              <div
                key={i}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
              >
                <img
                  src={src}
                  alt={`Student ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
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
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
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

      </div>
    </section>
  );
}