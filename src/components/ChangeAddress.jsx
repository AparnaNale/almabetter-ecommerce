
import React, { useState } from 'react'

const ChangeAddress = ({ setIsModelOpen, setAddress }) => {
    const [newAddress, setNewAddress] = useState("")
    const onClose = () => {
        setAddress(newAddress)
        setIsModelOpen(false)
    }
    return (
        <div>
            <h3 className="text-lg font-semibold mb-3">Change Address</h3>

            <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder='Enter new address'
                className='border p-2 w-full mb-4'
            />

            <div className='flex justify-end'>
                <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
                    onClick={() => setIsModelOpen(false)}
                >
                    Cancel
                </button>
                <button
                    className='bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={onClose}
                >
                    Save Address
                </button>
            </div>
        </div>
    )
}

export default ChangeAddress
