import React from 'react'

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 mt-[150px]">
      <div className="relative bg-white/90 rounded-lg shadow-xl p-6 w-full max-w-md">
        <button
          className="absolute top-2 right-3 text-gray-500 text-3xl hover:text-black"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  )
}

export default Modal
