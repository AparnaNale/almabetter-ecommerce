import { Link, useNavigate } from 'react-router-dom'
import { FaHeart, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setSearchTerm } from '../redux/productSlice'
import logo from '../assets/Images/eCommerce-logo.jpg'

const navCategories = [
  { label: 'Electronics', path: '/shop?category=electronics' },
  { label: "Women's Clothing", path: "/shop?category=women's clothing" },
  { label: "Men's Clothing", path: "/shop?category=men's clothing" },
  { label: 'Jewellery', path: '/shop?category=jewelery' },
]

const Navbar = () => {
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const wishlistCount = useSelector(state => state.favorites.items.length)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
    setSearch('')
    setMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      {/* Top Navbar */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24  flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="w-28">
          <img src={logo} alt="logo" />
        </Link>

        {/* Search */}
        <div className="hidden md:block flex-1 mx-6 relative">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <FaSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-yellow-500" />
          </form>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/favorite" className="relative flex flex-col items-center">
            <FaHeart className="text-xl" />
            {wishlistCount > 0 && (<span className="absolute -top-1 -right-2 text-[10px] min-w-[16px] h-[16px] bg-yellow-600 rounded-full flex items-center justify-center text-white">
              {wishlistCount}
            </span>
            )}
            <span className="text-xs">Wishlist</span>
          </Link>

          <Link to="/cart" className="relative flex flex-col items-center">
            <FaShoppingCart className="text-xl" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-2 text-[10px] min-w-[16px] h-[16px] bg-yellow-600 rounded-full flex items-center justify-center text-white">
                {totalQuantity}
              </span>
            )}
            <span className="text-xs">Cart</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Desktop Category Bar */}
      <div className="hidden md:block bg-gray-100">
        <div className="container mx-auto flex items-center justify-evenly  text-sm font-semibold">

          {/* Dropdown */}
          <div className="relative group">
            <button className="bg-yellow-600 text-white px-5 py-2 flex items-center gap-2 hover:bg-yellow-700">
              ▼ Browse Categories
            </button>

            <div className="absolute left-0 top-full mt-2 w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
              {navCategories.map(cat => (
                <Link
                  key={cat.label}
                  to={cat.path}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          {navCategories.map(cat => (
            <Link key={cat.label} to={cat.path} className='hover:text-yellow-600'>
              {cat.label}
            </Link>
          ))}

          <span className="text-gray-400">|</span>

          <Link to="/" className="text-yellow-600">
            Clearance up to 30% off
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 border-t">

          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-full py-2 pl-4 pr-10"
            />
            <FaSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
          </form>

          <div className="flex flex-col gap-3 font-semibold">
            {navCategories.map(cat => (
              <Link
                key={cat.label}
                to={cat.path}
                onClick={() => setMenuOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
            <Link to="/" className="text-red-600">
              Clearance up to 30% off
            </Link>
          </div>

          <div className="flex gap-6 pt-4 border-t">
            <Link to="/favorite">Wishlist ({wishlistCount})</Link>
            <Link to="/cart">Cart ({totalQuantity})</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
