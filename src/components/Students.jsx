
import { useState } from "react"
import { motion } from "framer-motion"
import  Button  from "./Button"
import { StudentsModal } from "./StudentModal"

function Students() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const featuredStudents = [
    { name: "Dr. Nilakshi Jain", institution: "Shah and Anchor Kutchhi Engineering College, India" },
    { name: "Dr. Aarti Karande", institution: "SPIT, Mumbai, India" },
    { name: "Aditya Das", position: "Software Engineer, Apple, United States" },
    { name: "Ananya Navelkar", position: "Software Engineer, Oracle, United States" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div className="max-w-7xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Students
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={itemVariants}>
            Showcasing some of our outstanding PhD and Bachelor students
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" variants={containerVariants}>
          {featuredStudents.map((student) => (
            <motion.div
              key={student.name}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{student.name}</h3>
              <p className="text-sm text-gray-600">{student.institution || student.position}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button onClick={() => setIsModalOpen(true)}>View All Students</Button>
        </div>
      </motion.div>

      <StudentsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Students

