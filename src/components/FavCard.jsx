import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { toggleFavorite, removeFromFav } from '../redux/FavSlice'
import { addToCart } from '../redux/cartSlice'

const FavCard = ({ item }) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.items)

  const isFav = favorites.some(fav => fav.id === item.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart(item))
    alert('Product Added Successfully!')
  }

  const handleFavorite = (e) => {
    e.preventDefault()
    dispatch(toggleFavorite(item))
  }

  return (
    <div className="bg-white p-4 shadow rounded border relative transform transition hover:scale-105">

      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center"
      >
        {isFav ? (
          <FaHeart className="text-red-600" />
        ) : (
          <FaRegHeart className="text-gray-500" />
        )}
      </button>

      <Link to={`/product/${item.id}`}>

        <div className="h-52 p-4 flex items-center justify-center bg-gray-50 rounded">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full object-contain"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold line-clamp-2">
            {item.title}
          </h3>

          <p className="text-lg font-bold text-yellow-600 mt-2">
            ${item.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={13}
                className={
                  i < Math.round(item.rating?.rate || 0)
                    ? 'text-yellow-500'
                    : 'text-gray-300'
                }
              />
            ))}
            <span className="text-xs text-gray-500">
              ({item.rating?.count})
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-4 space-y-2">
        <button
          onClick={handleAddToCart}
          className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
        >
          Add to Cart
        </button>

        <button
          onClick={() => dispatch(removeFromFav(item.id))}
          className="w-full border border-yellow-600 text-yellow-600 py-2 rounded hover:bg-yellow-600 hover:text-white"
        >
          Remove from Favorites
        </button>
      </div>
    </div>
  )
}

export default FavCard
