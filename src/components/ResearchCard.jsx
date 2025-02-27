"use client"
import { motion } from "framer-motion"



export function ResearchCard({ title, description, metrics }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="pt-4 border-t border-gray-100">
          <div className="flex justify-between text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{metrics.publications}</div>
              <div className="text-sm text-gray-500">Publications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{metrics.projects}</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{metrics.collaborations}</div>
              <div className="text-sm text-gray-500">Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

