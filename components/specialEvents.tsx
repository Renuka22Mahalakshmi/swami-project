"use client";
import { motion } from "framer-motion";

export default function SpecialEvents() {
  const events = [
    { title: "NEW YEAR’S DAY", description: "Sri Rami Reddy Tatha was very particular about the moments of entering the New Year, especially at 12.00am. Many devotees used to visit Kallur to have darshan of Tatha on that specific time and celebrate New Year worshiping Tatha by aarthi and pooja. The same is continuing even now at 12.00am every year." },
    { title: "AARADHOTSAVAM", description: "15th Jan 1993 i.e.; on the next day of Makara Sankranthi being Kanuma Tatha left his physical form at 7.45pm. Sansthan is organizing this prestigious occasion of his punya tithi every year thousands of devotees attend abhisekham, pooja, and annadanam." },
    { title: "ANUGONDA UTSAVAM", description: "Exactly after a month of aaradhotsavam in Kallur an occasion is held in anugonda, the birth place of Tatha when every individual of this region attend this occasion and offer their prayers to Tatha." },
    { title: "SIVARATRI", description: "Special abhisekham and pooja are offered to Tatha on this day." },
    { title: "SRI RAMA NAVAMI", description: "Sansthan does special pooja and annadanam as on this day. Tatha has inaugurated many Sai temples all over Andhra Pradesh." },
    { title: "GURU POORNIMA", description: "Devotees come to seek blessings from Tatha as he is our Sadguru and participate in bhajan, pooja, abhisekham and annadanam organized by the Sansthan." },
    { title: "JANMASHTAMI", description: "As Janmashtami is the birth tithi of both Tatha and Lord Sri Krishna, Sansthan held a huge celebration on this special occasion at both the places of Kallur and Anugonda." },
    { title: "DIWALI", description: "Once Pujya Sri Sivanesan Swamiji has sent a photograph of lord Sainatha to Kallur with some devotees and to their thrill Tatha was present at the entrance of Kallur to welcome Baba. Devotees were surprised to see him there and took both Tatha and Baba to Gurusthan with a great procession. This phenomenal incident took place on diwali day and the same is celebrated every year." },
    { title: "DATTAJAYANTHI", description: "Special abhisekham, pooja are performed on this occasion as Tatha is an incarnation of lord Dattatreya." },
    { title: "POORNIMA", description: "On every poornima day Sri Ramavadhuta vratam is performed which recently started from 3rd July, 2012." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 px-6 py-12 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif font-bold text-orange-700 mb-10 text-center tracking-wide hover:tracking-widest transition-all duration-300"
      >
        Special Events
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl space-y-6"
      >
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-orange-600 mb-2">{event.title}</h2>
            <p className="text-gray-800 text-lg leading-relaxed">{event.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}