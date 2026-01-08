import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaCarSide, FaQuestion, FaStar } from 'react-icons/fa'

const ProductDetail = () => {
  const { id } = useParams()
  const products = useSelector(state => state.products.data)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.find(
        item => item.id === Number(id)
      )
      setProduct(newProduct)
    }
  }, [id, products])

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading product...
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-10">

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-xl p-6">

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-3xl font-bold mb-3">
              {product.title}
            </h1>

            <p className="text-gray-500 capitalize mb-2">
              Category: {product.category}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(product.rating?.rate || 0)
                      ? 'text-yellow-500'
                      : 'text-gray-300'
                  }
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">
                ({product.rating?.count} reviews)
              </span>
            </div>

            <p className="text-3xl font-semibold text-red-600 mb-6">
              ${product.price}
            </p>

            {/* Quantity + Cart */}
            <div className="flex items-center gap-4 mb-6">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="border rounded-md px-3 py-2 w-20"
              />
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                Add To Cart
              </button>
            </div>

            {/* Extra Info */}
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <FaCarSide /> Free Delivery & Easy Returns
              </p>
              <p className="flex items-center gap-2">
                <FaQuestion /> Need help? Ask a question
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Description */}
      <div className="mt-10 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">
          Product Description
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>

    </div>
  )
}

export default ProductDetail
