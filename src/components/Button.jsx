import { motion } from "framer-motion"



export default function Button({ children, variant = "primary", ...props }) {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-colors duration-300"
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50",
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

