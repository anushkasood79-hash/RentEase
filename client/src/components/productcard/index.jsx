import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Wishlist Button */}
      <button
        onClick={() => {
          addToWishlist(product);
        }}
        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-100 z-10"
      >
        <FaHeart className="text-red-500 text-lg" />
      </button>

      {/* Product Details */}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />

        <div className="p-5">
          <h2 className="text-xl font-bold">
            {product.name}
          </h2>

          <p className="text-gray-500 mt-1">
            {product.category}
          </p>

          <p className="mt-3 text-blue-600 font-bold">
            ₹{product.rent}/month
          </p>

          <p className="text-gray-500">
            Deposit ₹{product.deposit}
          </p>

          <p className="mt-2">
            ⭐ {product.rating}
          </p>

          <p
            className={`mt-2 font-semibold ${
              product.available
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.available ? "Available" : "Out of Stock"}
          </p>
        </div>
      </Link>

      {/* Buttons */}
      <div className="px-5 pb-5 space-y-3">

        {/* Add to Cart */}
        <button
          onClick={() => {
            if (!product.available) {
              alert(`${product.name} is currently out of stock.`);
              return;
            }

            addToCart(product);
            alert(`${product.name} added to cart!`);
          }}
          className={`w-full py-3 rounded-lg text-white transition ${
            product.available
              ? "bg-green-600 hover:bg-green-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {product.available ? "Add to Cart" : "Out of Stock"}
        </button>

        {/* Rent Now */}
        <button
          onClick={() => {
            if (!product.available) {
              alert(`${product.name} is currently out of stock.`);
              return;
            }

            navigate("/checkout");
          }}
          className={`w-full py-3 rounded-lg text-white transition ${
            product.available
              ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Rent Now
        </button>

      </div>

    </div>
  );
}

export default ProductCard;