import React from 'react'
import { Link } from 'react-router-dom'
import ManCategory from '../assets/Images/mens-category.jpg'
import WomanCategory from '../assets/Images/womens-category.jpg'
import ElectronicsCategory from '../assets/Images/electronic-category1.jpg'
import JwelleryCategory from '../assets/Images/jwellery-category.jpg'

const categories = [
  {
    title: 'Men',
    imageUrl: ManCategory,
    path: "/shop?category=men's clothing"
  },
  {
    title: 'Women',
    imageUrl: WomanCategory,
    path: "/shop?category=women's clothing"
  },
  {
    title: 'Electronics',
    imageUrl: ElectronicsCategory,
    path: '/shop?category=electronics'
  },
  {
    title: 'Jewellery',
    imageUrl: JwelleryCategory,
    path: '/shop?category=jewelery'
  }
]

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {categories.map((category, index) => (
        <Link
          to={category.path}
          key={index}
          className="group relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
        >

          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h3 className="text-2xl font-bold mb-2 tracking-wide">
              {category.title}
            </h3>

            <span className="flex items-center gap-1 text-sm font-medium opacity-90 group-hover:gap-2 transition-all">
              View All <span className="text-lg">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategorySection
