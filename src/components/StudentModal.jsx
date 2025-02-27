import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button"; // Ensure this is correctly defined or replace with a <button> element

export function StudentsModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("phd");

  const phdStudents = [
    {
      name: "Dr. Nilakshi Jain",
      institution: "Shah and Anchor Kutchhi Engineering College, India",
      link: "https://www.linkedin.com/in/dr-nilakshi-jain-7593a264/",
    },
    {
      name: "Dr. Aarti Karande",
      institution: "SPIT, Mumbai, India",
      link: "https://www.linkedin.com/in/aartimkarande/",
    },
    {
      name: "Dr. Seema Kolkur",
      institution: "Thadomal Shahani Engineering College, India",
      link: "https://www.linkedin.com/in/seema-kolkur-9a484120/",
    },
    {
      name: "Dr. Anjali Yeole",
      institution: "VESIT, Chembur, Mumbai, India",
      link: "https://www.linkedin.com/in/dr-anjali-yeole-b03061162/",
    },
    {
      name: "Dr. Deepak Kapgate",
      institution: "Postdoctoral Researcher: Full time PDF, Srinivas University, Karnataka, India",
      link: "https://www.linkedin.com/in/dr-deepak-kapgate-43262863/",
    },
    {
      name: "Dr. Asha Bharambe",
      institution: "VESIT, Chembur, Mumbai, India",
      link: "https://www.linkedin.com/in/asha-bharambe-36671560/",
    },
    {
      name: "Dr. Kailas Devadkar",
      institution: "SPIT, Mumbai, India",
      link: "https://www.linkedin.com/in/kailas-devadkar-044500123/",
    },
    {
      name: "Dr. Surekha Arjapure",
      institution: "SPIT, Mumbai, India",
      link: "https://www.linkedin.com/in/surekha-dholay-5080a2105/",
    },
  ]

  const bachelorStudents = [
    {
      name: "Aditya Das",
      position: "Software Engineer, Apple, United States",
      link: "https://www.linkedin.com/in/adityadas96/",
    },
    {
      name: "Ananya Navelkar",
      position: "Software Engineer, Oracle, United States",
      link: "https://www.linkedin.com/in/ananyanavelkar",
    },
    {
      name: "Anjali Kanvinde",
      position: "Technology Analyst, Deutsche Bank, India",
      link: "https://www.linkedin.com/in/anjali-kanvinde",
    },
    {
      name: "Anushka Kanawade",
      position: "Software Engineer, Uber Technologies, United States",
      link: "http://www.linkedin.com/in/anushka-kanawade",
    },
    {
      name: "Aumkar Gadekar",
      position: "Technology Analyst, Deutsche Bank, India",
      link: "https://www.linkedin.com/in/aumkar-gadekar-a02a54187/",
    },
    {
      name: "Damnik Jain",
      position: "Software Engineer, JP Morgan, India",
      link: "https://www.linkedin.com/mwlite/in/damnik",
    },
    { name: "Jay Parekh", position: "Software Engineer, ImageKit, India", link: "https://www.linkedin.com/in/jaym/" },
    {
      name: "Jeet Mishra",
      position: "Analyst, MSCI, India",
      link: "https://www.linkedin.com/in/jeet-mishra-843b49176",
    },
    {
      name: "Jinang Gandhi",
      position: "Tech Implementation Engineer, MSCI, India",
      link: "https://www.linkedin.com/in/jinang-gandhi-419415177/",
    },
    {
      name: "Mahesh Tamse",
      position: "Technology Analyst, Deutsche Bank, India",
      link: "https://www.linkedin.com/in/mahesh-tamse",
    },
    {
      name: "Pulin Prabhu",
      position: "Senior Software Developer, ICICI Lombard, India",
      link: "https://in.linkedin.com/in/pulinprabhu",
    },
    {
      name: "Palak Davda",
      position: "Software Development Engineer, Amazon, India",
      link: "http://linkedin.com/in/palak-davda",
    },
    {
      name: "Parth Dedhia",
      position: "Machine Learning Engineer, Quantiphi, India",
      link: "https://www.linkedin.com/in/parth-dedhia",
    },
    {
      name: "Riya Bakhtiani",
      position: "Software Development Engineer Intern, Snowflake, United States",
      link: "https://www.linkedin.com/in/riya-bakhtiani",
    },
    {
      name: "Sarah Gawade",
      position: "Software Engineer, Microsoft, India",
      link: "https://www.linkedin.com/in/sarah-gawde-7aa155176",
    },
    {
      name: "Sarah Sonje",
      position: "MS CS at Georgia Tech | Ex-SDE at Amazon, India",
      link: "https://www.linkedin.com/in/sarah-sonje/",
    },
    {
      name: "Shreya Oak",
      position: "Technology Analyst, Deutsche Bank, India",
      link: "https://www.linkedin.com/in/shreya-oak-0a8319147",
    },
    {
      name: "Smruti Varvadekar",
      position: "Software Development Engineer, Amazon AWS, United States",
      link: "https://www.linkedin.com/in/smruti-varvadekar-558294122",
    },
    {
      name: "Sumit Gouthaman",
      position: "Software Engineer, Google, United States",
      link: "https://www.linkedin.com/in/sumitgouthaman",
    },
    {
      name: "Tanisha Kulkarni",
      position: "Developer & Business Analyst, Barclays, India",
      link: "https://www.linkedin.com/in/tanisha-kulkarni",
    },
    {
      name: "Tania Rajabally",
      position: "Graduate Analyst (Technology), Deutsche Bank, India",
      link: "https://www.linkedin.com/in/tania-rajabally",
    },
    {
      name: "Tanvi Dhope",
      position: "Software Engineer, Microsoft, India",
      link: "https://www.linkedin.com/in/tanvi-dhope",
    },
    {
      name: "Tejas Bhitle",
      position: "Senior Technology Associate, Morgan Stanley, India",
      link: "https://www.linkedin.com/in/tejasbhitle",
    },
    {
      name: "Tejas Chheda",
      position:
        "GML SWE @ Meta | MS CS @ UMass Amherst | Grad Student Researcher @ IBM, IESL | ex-ML Intern @ PayPal | JN Tata Scholar",
      link: "https://www.linkedin.com/in/tejas-chh/",
    },
    {
      name: "Urvi Bhanushali",
      position: "Senior Technology Associate, Morgan Stanley, India",
      link: "www.linkedin.com/in/urvibh",
    },
    {
      name: "Vedant Kumar",
      position: "MS Data Science student at Columbia University",
      link: "https://www.linkedin.com/in/vedant-kumar-2109",
    },
    {
      name: "Rithvika Iyer",
      position: "MS CS @UT Austin | ex ML engineer at Reliance Jio | Google WTM Scholar APAC 2019",
      link: "https://www.linkedin.com/in/rithvika-iyer-b93513154/",
    },
    {
      name: "Priyank Singhal",
      position: "BE Computer from S.P.I.T, Product Lead at Airbnb",
      link: "https://www.linkedin.com/in/priyanksinghal/",
    },
  ]

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Students</h2>

          <div className="flex mb-6">
            <Button
              onClick={() => setActiveTab("phd")}
              variant={activeTab === "phd" ? "primary" : "outline"}
              className="mr-4"
            >
              PhD Students
            </Button>
            <Button
              onClick={() => setActiveTab("bachelor")}
              variant={activeTab === "bachelor" ? "primary" : "outline"}
            >
              Bachelor Students
            </Button>
          </div>

          <div className="overflow-y-auto flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTab === "phd" ? phdStudents : bachelorStudents).map((student) => (
                <div
                  key={student.name}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{student.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{student.institution || student.position}</p>
                  <a
                    href={student.link.startsWith("http") ? student.link : `https://${student.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
