"use client"

import { useState, useEffect, useRef } from "react"

const Slider = ({ min, max, step = 1, defaultValue, value: controlledValue, onChange, className = "" }) => {
  const [value, setValue] = useState(defaultValue || min)
  const isControlled = controlledValue !== undefined
  const currentValue = isControlled ? controlledValue : value
  const sliderRef = useRef(null)

  useEffect(() => {
    if (isControlled) {
      setValue(controlledValue)
    }
  }, [isControlled, controlledValue])

  const handleChange = (newValue) => {
    if (!isControlled) {
      setValue(newValue)
    }
    onChange?.(newValue)
  }

  const calculatePercentage = (value) => {
    return ((value - min) / (max - min)) * 100
  }

  const handleMouseDown = (event) => {
    const handleMouseMove = (e) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect()
        const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
        const newValue = Math.round(((percentage / 100) * (max - min)) / step) * step + min
        handleChange(newValue)
      }
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div
      className={`relative w-full h-2 bg-gray-200 rounded-full cursor-pointer ${className}`}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute h-full bg-blue-600 rounded-full"
        style={{ width: `${calculatePercentage(currentValue)}%` }}
      />
      <div
        className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1 -ml-2"
        style={{ left: `${calculatePercentage(currentValue)}%` }}
      />
    </div>
  )
}

export default Slider

