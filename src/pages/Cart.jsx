import React, { useState } from 'react'
import EmptyCart from '../assets/Images/empty-cart.png'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [address, setAddress] = useState('Main Street, 0012')
  const [isModelOpen, setIsModelOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ?
        (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>

            <div className="flex flex-col md:flex-row justify-between md:space-x-10 mt-8">
              {/* LEFT SIDE */}
              <div className="md:w-2/3 w-full">
             
                <div className="hidden md:flex justify-between border-b items-center mb-4 text-xs font-bold">
                  <p>PRODUCTS</p>
                  <div className="flex space-x-8 ">
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>SUBTOTAL</p>
                    <p>REMOVE</p>
                  </div>
                </div>

                {cart.products.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-3 border-b space-y-3 md:space-y-0"
                  >
                    {/* Product Info */}
                    <div className="flex items-center space-x-3 md:w-1/2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <h3 className="text-sm md:text-lg font-semibold line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    {/* Product Actions */}
                    <div className="flex flex-wrap md:flex-nowrap justify-between md:justify-end gap-4 md:gap-8 items-center text-sm w-full md:w-1/2">

                      {/* Price */}
                      <div className="flex flex-col md:block">
                        <span className="md:hidden text-gray-500 text-xs">Price</span>
                        <p>${item.price.toFixed(2)}</p>
                      </div>

                      {/* Quantity */}
                      <div className="flex flex-col md:block">
                        <span className="md:hidden text-gray-500 text-xs">Quantity</span>
                        <div className="flex items-center border">
                          <button
                            className="px-2 text-lg font-bold border-r"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            -
                          </button>
                          <p className="px-3">{item.quantity}</p>
                          <button
                            className="px-2 text-lg font-bold border-l"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="flex flex-col md:block">
                        <span className="md:hidden text-gray-500 text-xs">Subtotal</span>
                        <p className="font-semibold">
                          ${(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>

                      {/* Remove */}
                      <button
                        className="text-red-500 hover:text-red-700 self-start md:self-auto"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>


              {/* RIGHT SIDE */}
              <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>

                <div className="flex justify-between mb-5 border-b pb-1">
                  <span>Total Items:</span>
                  <span>{cart.totalQuantity}</span>
                </div>

                <div className="mb-4 border-b pb-2">
                  <p>Shipping:</p>
                  <p className="ml-2">Shiping to{" "}
                    <span className='text-xs font-bold'>{address}</span>
                  </p>
                  <button className="text-blue-500 hover:underline mt-1 ml-2"
                    onClick={() => setIsModelOpen(true)}
                  >
                    Change address
                  </button>
                </div>

                <div className="flex justify-between mb-4">
                  <span>Total Price:</span>
                  <span>${(cart.totalPrice || 0).toFixed(2)}</span>
                </div>

                <button
                  className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

            {/* MODAL */}
            <Modal
              isModelOpen={isModelOpen}
              setIsModelOpen={setIsModelOpen}
            >
              <ChangeAddress setIsModelOpen={setIsModelOpen} setAddress={setAddress} />
            </Modal>

          </div>
        )
        :
        (
          <div className="flex justify-center">
            <img src={EmptyCart} alt="Empty Cart" className="h-96" />
          </div>
        )}
    </div>
  )
}

export default Cart
