import React, { useEffect, useState } from 'react'
import HeroImg from '../assets/Images/bg-img.jpg'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { fetchProducts } from '../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Home = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.products)
  const PRODUCTS_PER_PAGE = 8
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(data.length / PRODUCTS_PER_PAGE)


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">

      {/* Hero Section */}
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full h-[450px] relative rounded-lg overflow-hidden shadow">
            <img src={HeroImg} alt="Hero" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/15"></div>

            <div className="absolute top-35 left-10 max-w-md">
              <p className="text-sm mb-4">
                Discover high-quality products at prices you’ll love.
              </p>
              <h2 className="text-4xl font-bold mb-4">
                Welcome to E-Commerce
              </h2>

              <Link to="/shop">
                <button className="bg-yellow-600 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-700">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <CategorySection />

      {/* Products Section */}
      <div className="container mx-auto py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination Arrows */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 gap-4">

            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border
                ${currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-yellow-600 hover:bg-gray-100'
                }
              `}
            >
              <FaChevronLeft />
            </button>

            <span className="text-sm font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border
                ${currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-yellow-600 hover:bg-gray-100'
                }
              `}
            >
              <FaChevronRight />
            </button>

          </div>
        )}

      </div>

      {/* Info Section */}
      <InfoSection />

    </div>
  )
}

export default Home
