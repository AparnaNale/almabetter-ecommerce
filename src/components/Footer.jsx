import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import logo from '../assets/Images/eCommerce-logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-3 px-4 md:px-16 lg:px-24 border-t border-gray-200">

      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <img src={logo} alt="logo" className="w-32 mb-1" />

          <p className="text-sm leading-relaxed text-gray-600">
            Your one-step solution for all your needs. Shop with us and enjoy the best online shopping experience.
          </p>

          <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
            <FaPhoneAlt className="text-yellow-600 text-xl" />
            <div className="text-sm">
              <p className="text-gray-500">Call us 24/7</p>
              <p className="text-blue-500 font-semibold">+0123 456 789</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-md font-semibold text-gray-900 mb-3 text-center mt-8">
            Useful Links
          </h4>
          <ul className="space-y-2 text-sm text-center" >
            {['About', 'Our Services', 'How to Shop', 'FAQ', 'Contact Us'].map(item => (
              <li key={item}>
                <Link to="/" className="hover:text-yellow-600 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-md font-semibold text-gray-900 mb-3 mt-8 text-center">
            Customer Service
          </h4>
          <ul className="space-y-2 text-sm text-center">
            {[
              'Payment Methods',
              'Money-back Guarantee',
              'Shipping',
              'Terms & Conditions',
              'Privacy Policy'
            ].map(item => (
              <li key={item}>
                <Link to="/" className="hover:text-yellow-600 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-md font-semibold text-gray-900 mb-3 mt-8 text-center">
            My Account
          </h4>
          <ul className="space-y-2 text-sm text-center">
            {['Sign In', 'View Cart', 'Wishlist', 'Track Order', 'Help'].map(item => (
              <li key={item}>
                <Link to="/" className="hover:text-yellow-600 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-300 pt-6">
        <div className="mx-auto flex flex-row gap-4 items-center justify-between mb-2">

          <p className="text-sm text-gray-500 text-center">
            © 2025 E-Commerce. All rights reserved.
          </p>

          <div className="flex gap-6 text-2xl">
            <a className="text-gray-400 hover:text-blue-600 transition"><FaFacebook /></a>
            <a className="text-gray-400 hover:text-sky-400 transition"><FaTwitter /></a>
            <a className="text-gray-400 hover:text-gray-700 transition"><FaGithub /></a>
            <a className="text-gray-400 hover:text-blue-700 transition"><FaLinkedin /></a>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
