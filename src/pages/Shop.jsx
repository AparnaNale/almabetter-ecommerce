import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../redux/productSlice'

const Shop = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const { data } = useSelector((state) => state.products)
  const [filteredData, setFilteredData] = useState([])

  const params = new URLSearchParams(location.search)
  const category = params.get('category')


  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, data.length])

  //  category name
  useEffect(() => {
    if (category) {
      const filtered = data.filter(
        (item) => item.category === category
      )
      setFilteredData(filtered)
    } else {
      setFilteredData(data)
    }
  }, [category, data])

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">

      <h2 className="text-2xl font-bold mb-6 text-center capitalize text-yellow-600">
        {category ? category : 'Shop'}
      </h2>

      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      )
        :
        (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filteredData.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}

    </div>
  )
}

export default Shop
