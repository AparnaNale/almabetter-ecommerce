
import React from 'react'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../redux/FavSlice'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.items)
  const isFav = favorites.some(fav => fav.id === item.id)

  const handleAddToCart = (e, item) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(item))
    alert('Product Added Successfully!')
  }

  const handleFavorite = (e) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(toggleFavorite(item))
  }

  return (
    <Link to={`/product/${item.id}`} className="h-full">
      <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 '
        onClick={handleFavorite}>

        {/* add to Fav   */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center cursor-pointer"
        >
          {isFav ? (
            <FaHeart className="text-red-600" />
          ) : (
            <FaRegHeart className="text-gray-500" />
          )}
        </button>

        <div className="h-52 p-4 flex items-center justify-center bg-gray-50 rounded-t-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full object-contain "
          />
        </div>

        <div className="flex flex-col justify-between flex-1 px-4 pb-5 relative">

          <div>
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[40px]">
              {item.title}
            </h3>

            <p className="text-lg font-bold text-yellow-600 mb-2">
              ${item.price}
            </p>

            <div className="flex items-center gap-2">
              <div className="flex gap-1">
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
              </div>
              <span className="text-xs text-gray-500">
                ({item.rating?.count})
              </span>
            </div>
          </div>


          {/* Add to Cart */}
          <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-yellow-600
              group text-white text-sm rounded-full hover:w-32 hover:bg-yellow-600 transition-all  duration-50'
            onClick={(e) => handleAddToCart(e, item)}>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add To Cart</span>
          </div>

        </div>
      </div>
    </Link>
  )
}

export default ProductCard
