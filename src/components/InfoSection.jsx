import React from 'react'
import { FaHeadset, FaInfoCircle, FaShippingFast, FaUndoAlt } from 'react-icons/fa'

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className='text-3xl text-yellow-600' />,
      title: 'Free Shipping',
      description: 'Orders 550 or more'
    },
    {
      icon: <FaUndoAlt className='text-3xl text-yellow-600' />,
      title: 'Free Returns',
      description: 'Within 30 days'
    },
    {
      icon: <FaInfoCircle className='text-3xl text-yellow-600' />,
      title: 'Get 20% Off 1 Item',
      description: 'When you sign up'
    },
    {
      icon: <FaHeadset className='text-3xl text-yellow-600' />,
      title: 'We Support',
      description: '24/7 amazing services'
    }

  ]
  return (
    <div className='bg-gray-200 py-22'>
      <h3 className='text-center mb-4 text-lg font-semibold text-yellow-600'>What We Believe</h3>
      <div className='container mx-auto px-4 md:px-12'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {infoItems.map((item, index) => (
            <div
              key={index}
              className='flex  items-center text-center p-6   justify-around
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer'
            >
              {item.icon}
              <div className=''>
                <h3 className='mt-4 text-lg font-semibold text-gray-800'>
                  {item.title}
                </h3>
                <p className='mt-2 text-sm text-gray-600'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoSection
