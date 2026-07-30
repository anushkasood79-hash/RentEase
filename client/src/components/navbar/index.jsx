import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
   const [search, setSearch] = useState("");
   const navigate = useNavigate();

   const handleSearch = (e) => {
    if (e.key === "Enter") {
    navigate(`/products?search=${encodeURIComponent(search)}`);
   }
   };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          RentEase
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center border rounded-lg px-3 py-2 w-72">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="ml-2 w-full outline-none"
            />
        </div>

        {/* Icons & Buttons */}
        <div className="flex items-center gap-5">
          <Link to="/dashboard">
         <FaUserCircle
         className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer"
         title="Dashboard"
         />
         </Link>


         <Link to="/wishlist">
          <FaHeart className="text-gray-600 hover:text-red-500 text-2xl cursor-pointer" />
          </Link>
          
          <Link to="/cart">
          <FaShoppingCart
            className="text-xl text-gray-600 hover:text-blue-600 cursor-pointer"
          /></Link>

          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;