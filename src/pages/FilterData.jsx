import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import NoProduct from '../assets/Images/product-not-found.jpg'

const FilterData = () => {
  const filterProducts = useSelector(
    state => state.products.filteredData
  )

  return (
    <div className="container mx-auto py-12 px-4">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filterProducts.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )
        :
        (
          <div className="flex justify-center">
            <img src={NoProduct} alt="No product found" />
          </div>
        )}
    </div>
  )
}

export default FilterData

