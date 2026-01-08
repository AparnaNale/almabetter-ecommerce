import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaHeartBroken } from 'react-icons/fa'
import FavCard from '../components/FavCard'

const Favorite = () => {
  const favorites = useSelector(state => state.favorites.items)

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <FaHeartBroken size={60} className="text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No Favorites Yet</h2>
        <p className="text-gray-500 mb-4">
          Start adding products you love ❤️
        </p>
        <Link
          to="/"
          className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div >
     <h3 className="text-2xl font-semibold mb-4 mt-4 text-center">Wishlist</h3>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
       {favorites.map(item => (
        <FavCard key={item.id} item={item} />
      ))}
     </div>
    </div>
  )
}

export default Favorite
