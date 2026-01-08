import React, { useState } from 'react'
import { FaPhoneAlt, FaUser } from 'react-icons/fa'
import Modal from '../components/Modal'
import Login from './Login'
import Register from './Register'

const AnnouncementBar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const openSignUp = () => {
    setIsLogin(false)
    setIsModelOpen(true)
  }

  const openLogin = () => {
    setIsLogin(true)
    setIsModelOpen(true)
  }

  return (
    <div className="bg-white text-gray-600 text-xs sm:text-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">

        {/* Left  */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-600" />
          <span className="hidden sm:inline">+91 98765 43210</span>
          <span className="sm:hidden">Call Us</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <select className="rounded px-2 py-1 text-xs sm:text-sm outline-none cursor-pointer">
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>

          <select className=" rounded px-2 py-1 text-xs sm:text-sm outline-none cursor-pointer">
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
          </select>

          <span className="hidden md:inline">|</span>

          <button
            className="hidden md:block hover:text-black transition"
            onClick={openLogin}
          >
            Login / Register
          </button>

          <button
            className="md:hidden text-lg p-1 rounded hover:bg-gray-100"
            onClick={openLogin}
          >
            <FaUser />
          </button>
        </div>
      </div>

      {/* Modal */}

      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </div>
  )
}

export default AnnouncementBar
