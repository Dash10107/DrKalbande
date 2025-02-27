"use client"
import { motion } from "framer-motion"
import { ResearchCard } from "./ResearchCard"

function Research() {
  const researchAreas = [
    {
      title: "Management Information System, Vitiligo Clinic - KEM",
      description:
        "MIS-Application is a Patient Management System helpful for the doctors to keep a track over patient's details. It is software where you can manage Patients information like his/her age, disease diagnosed, update patient's record, you can add a new Patient, change their details, take follow ups, etc.",
      metrics: {
        publications: "10+",
        projects: "3",
        collaborations: "5",
      },
    },
    {
      title: "Skin Image Analysis Software for Diagnosis of Chronic Puritic Skin Diseases",
      description:
        "Pruritus is defined as an unpleasant sensation that provokes the desire to scratch. Certain systemic diseases have long been known to cause pruritus that ranges in intensity from a mild annoyance to an intractable, disabling condition.",
      metrics: {
        publications: "15+",
        projects: "4",
        collaborations: "7",
      },
    },
    {
      title: "Analytical Study of Uttar Pradesh Samajwadi Pension Scheme",
      description:
        "The project checks if selection of beneficiaries is as per guidelines and the condition of the families that are beneficiaries. Also, to find out key drivers of Pension Yojna by determining factors which are responsible for successful/poor implementation of Yojna.",
      metrics: {
        publications: "8+",
        projects: "2",
        collaborations: "3",
      },
    },
    {
      title: "Tarang- A forum for Empowering Elected Women Representatives (EWRS)",
      description:
        "Tarang is an android application which assists the user, the EWRs, to understand the Gram Panchayat, the different roles, schemes and laws. In this modern age, technology has become a necessity.",
      metrics: {
        publications: "12+",
        projects: "5",
        collaborations: "6",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div className="max-w-7xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Research Areas
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Exploring innovative solutions in healthcare, social development, and information systems
          </motion.p>
        </div>

        <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
          {researchAreas.map((area, index) => (
            <ResearchCard key={area.title} title={area.title} description={area.description} metrics={area.metrics} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Research

