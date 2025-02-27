"use client"
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf";
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
const longCvFile = "/assets/CVofdrkalbande.pdf";
const shortCvFile = "/assets/shortCv.pdf";import { pdfjs } from "react-pdf";
import Slider from "./Slider";
import Modal from "./Modal";
import Button from "./Button";
const  pic  =  "assets/images/mainpic.jpg"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
function Home() {
  const [isCVVisible, setIsCVVisible] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false)
  const [isStudentsModalOpen, setIsStudentsModalOpen] = useState(false)
  const [isPastStudentsModalOpen, setIsPastStudentsModalOpen] = useState(false)
  const [showShortCV, setShowShortCV] = useState(false);
  const cvFile = showShortCV ? shortCvFile : longCvFile;

  const skills = [
    "Soft Computing",
    "Computer Networks",
    "Human Machine Interaction",
    "Decision Making",
    "Business Intelligence",
    "Mobile Application Development",
  ]


  const openCV = () => {
    setIsCVVisible(true)
  }

  const closeCV = () => {
    setIsCVVisible(false)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1);
  }


  const handleSliderChange = (value) => setPageNumber(value)
const socials = [
  { name: "Personal Website", url: "https://drkalbande.in/" },
  { name: "Google Scholar Citations", url: "https://scholar.google.com/citations?user=6AIFEH0AAAAJ&hl=en" },
  { name: "Scopus Citations", url: "https://orcid.org/0000-0003-1057-107X" },
  { name: "Start-up (AiM4U)", url: "https://www.aim4u.co.in/#/" },
  { name: "Tech for Social", url: "https://techforsocial.com/" },
];
  return (
    <div className="bg-white min-h-screen">
    <main className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dr. Dhananjay Kalbande</h1>
        <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
      </motion.div>

      {/* Main content - 3 column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column - Image */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className=" w-72 aspect-square bg-gray-100 rounded-lg shadow-md flex items-center justify-center overflow-hidden sticky top-10 ">
            <img
              src={pic || "/placeholder.svg"}
              alt="Dr. Dhananjay Kalbande"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Middle column - Text content */}
        <motion.div
          className="lg:col-span-6 space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Bio paragraph */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              Ex-HoD [Computer Engineering (Apr 2012 to Oct 2019, Oct 2022 to Feb 2023)], Ex-Dean of Industry Relations
              (Jan 2017 to Oct 2022) at Sardar Patel Institute of Technology, Mumbai. With a Ph.D in Technology,
              Post-doctorate from TISS, and over 23+ years of experience in teaching & research, my areas of interest
              include Soft Computing (Neural Networks, Fuzzy Logic), Computer Networks, Human Machine Interaction,
              Decision Making, Business Intelligence, Mobile Application Development and Technology for social,
              healthcare and rural development.
            </p>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Startup info */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              "AiM4u Software Solutions Pvt.Ltd" is my startup incorporated on 20th June 2023 aimed at developing
              affordable IT-enabled [tele-medicine] healthcare services mainly focusing on skin-related issues and also
              providing education services via Skill-based Internship Programs in the area of Artificial Intelligence,
              Computer Vision, Machine Learning and Deep Learning. Our flagship product "DermaLens" is an AI-powered
              Skincare Assistant to check your skin issues, helps you predict skin diseases (30) and connect with
              dermatologists from anywhere, anytime.
            </p>
          </div>

          {/* Contributions grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Contributions</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Published Books</li>
                <li>• Expert Seminars</li>
                <li>• Research Papers</li>
                <li>• Patents</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Experience</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Startup Founder</li>
                <li>• Healthcare Tech</li>
                <li>• IT Solutions</li>
                <li>• Telemedicine</li>
              </ul>
            </motion.div>
          </div>

          {/* CV Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <motion.button
              onClick={openCV}
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View CV
            </motion.button>
          </motion.div>
        </motion.div>


  {/* Right column - Social links */}
  <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4 sticky top-8">
            <h3 className="text-xl font-semibold text-gray-900">Social Links</h3>
            <ul className="space-y-5">
              {socials.map((social, index) => (
                <motion.li
                  key={social.name}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-gray-400 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-link"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    {social.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
                </div>
  <AnimatePresence>
      {isCVVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg w-full max-w-4xl mx-auto my-4 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-center pt-[6vh] bg-gray-100">
  <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg">
    
    {/* Header Section - Centered with Padding */}
    <div className="p-6 sm:p-8 border-b border-gray-200">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center sm:text-left">
        
        {/* Title - Properly Centered */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Dr. Dhananjay Kalbande's CV
        </h2>

        {/* Buttons - Aligned & Responsive */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <motion.button
            onClick={() => setShowShortCV((prev) => !prev)}
            className="px-5 py-3 bg-gray-600 text-white rounded-full font-medium hover:bg-gray-700 transition-colors duration-300 text-base sm:text-lg w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showShortCV ? "View Full CV" : "View Short CV"}
          </motion.button>
          <motion.button
            onClick={closeCV}
            className="px-5 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close CV
          </motion.button>
        </div>

      </div>
    </div>

    {/* PDF Viewer Section */}
    <div className="flex justify-center items-start min-h-screen pt-6">
      <div className="bg-white shadow-2xl rounded-lg p-6 sm:p-8 w-full max-w-4xl">
        
        {/* PDF Container - Fixed Height, Only PDF Scrollable */}
        <div className="w-full max-h-[70vh] overflow-auto flex justify-center items-center border rounded-md shadow-lg">
          <Document
            file={showShortCV ? shortCvFile : longCvFile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="w-full flex justify-center"
          >
            <Page 
              pageNumber={pageNumber} 
              width={Math.min(window.innerWidth - 80, 850)}
              className="rounded-md"
            />
          </Document>
        </div>

        {/* Page Navigation & Slider */}
        {numPages && numPages > 1 && (
          <div className="flex flex-col items-center mt-6 w-full">
            
            {/* Beautiful Range Slider */}
            <div className="relative w-full max-w-lg">
              <input
                type="range"
                min={1}
                max={numPages}
                value={pageNumber}
                onChange={(e) => handleSliderChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="absolute inset-0 flex justify-between text-sm text-gray-600 px-2">
                <span>1</span>
                <span>{numPages}</span>
              </div>
            </div>

            {/* Page Indicator with Smooth Buttons */}
            <div className="flex items-center gap-5 mt-4">
              <button
                type="button"
                onClick={() => handleSliderChange(Math.max(pageNumber - 1, 1))}
                className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition text-lg font-semibold"
              >
                ◀
              </button>
              <span className="text-xl font-bold text-gray-700">
                Page {pageNumber} of {numPages}
              </span>
              <button
                type="button"
                onClick={() => handleSliderChange(Math.min(pageNumber + 1, numPages))}
                className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition text-lg font-semibold"
              >
                ▶
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

  </div>
</div>


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    <Modal isOpen={isResearchModalOpen} onClose={() => setIsResearchModalOpen(false)} title="Research">
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Management Information System, Vitiligo Clinic - KEM
              </h3>
              <p className="text-gray-600 leading-relaxed">
                MIS-Application is a Patient Management System helpful for the doctors to keep a track over patient's
                details. It is software where you can manage Patients information like his/her age, disease diagnosed,
                update patient's record, you can add a new Patient, change their details, take follow ups, etc. It can
                be handled by different users/doctors depending on the need and also groups of users can be created by
                granting limited or total access over the system.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Skin Image Analysis Software for Diagnosis of Chronic Puritic Skin Diseases
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pruritus is defined as an unpleasant sensation that provokes the desire to scratch. Certain systemic
                diseases have long been known to cause pruritus that ranges in intensity from a mild annoyance to an
                intractable, disabling condition. Generalized pruritus may be classified into the following categories
                on the basis of the underlying causative disease: renal pruritus, cholestatic pruritus, hematologic
                pruritus, endocrine pruritus, pruritus related to malignancy, and idiopathic generalized pruritus.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Analytical Study of Uttar Pradesh Samajwadi Pension Scheme
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Today, due to advancement in Mobile technology, it is possible to create on-line Information system for
                maintaining the records of any activities from the field survey carried out, it is observed that an
                existing applications require data to be collected from various Health officer of Rural and Urban area,
                which cause in increasing time for data entries. Hence data entry operation as well as record's updating
                is time consuming. Hence the research work was required to design a smart phone application named as
                "UPSPS" focusing on real time updating of data of any Pension scheme. The project checks if selection of
                beneficiaries is as per guidelines and the condition of the families that are beneficiaries. Also, to
                find out key drivers of Pension Yojna by determining factors which are responsible for successful/poor
                implementation of Yojna. (eg: Transfer of funds, awareness relating to education, health and literacy,
                readiness of service providers, effectiveness of monitoring system). The project involves suggesting
                measures and inventions for sustainability and scalability of Pension Yojna.
              </p>
              <p className="mt-4 text-sm text-blue-600">
                Patent Filed: Filed a patent for Research Protocol titled 'MOBILE APP FOR PRASUTITIKAKARAN AND
                TIKAKARAN' dated 26/08/2016, Application Number: 201621026972 A
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Tarang- A forum for Empowering Elected Women Representatives (EWRS)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tarang is an android application which assists the user, the EWRs, to understand the Gram Panchayat, the
                different roles, schemes and laws. In this modern age, technology has become a necessity. Therefore, the
                application also provides a module 'E-learning' to aid the women in learning how to operate and perform
                basic functions on the computer with the help of materials and videos provided in the application. The
                users also have additional option of using the application to learn in Hindi or in English ensuring that
                language would not be a barrier for education the users. With the vivid images and videos, the
                application is intended to be a fun and educative method to strengthen and ease the transitioning of the
                women to a EWR.
              </p>
            </div>
          </div>
        </Modal>

        <Modal isOpen={isStudentsModalOpen} onClose={() => setIsStudentsModalOpen(false)} title="Students">
          <div className="w-full h-[70vh]">
            <iframe
              src="students.pdf"
              width="100%"
              height="100%"
              title="Students PDF"
              className="border-0 rounded-lg shadow-lg"
            />
          </div>
        </Modal>

        <Modal isOpen={isPastStudentsModalOpen} onClose={() => setIsPastStudentsModalOpen(false)} title="Past Students">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">PhD Students</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
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
                ].map((student, index) => (
                  <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <a
                      href={student.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {student.name}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">{student.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Bachelor Students (Research, Internship and Projects)
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
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
                  {
                    name: "Jay Parekh",
                    position: "Software Engineer, ImageKit, India",
                    link: "https://www.linkedin.com/in/jaym/",
                  },
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
                ].map((student, index) => (
                  <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <a
                      href={student.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {student.name}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">{student.position}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>

      </main>
    </div>
  )
}

export default Home

