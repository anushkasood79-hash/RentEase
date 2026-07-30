import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

function Wishlist() {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            My Wishlist
          </h1>

          <p className="text-center text-gray-500 mt-3">
            Your favourite rental products.
          </p>

          {wishlist.length === 0 ? (
            <p className="text-center text-xl mt-12">
              Your wishlist is empty.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-5">

                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {item.category}
                    </p>

                    <p className="text-blue-600 font-bold mt-3">
                      ₹{item.rent}/month
                    </p>

                    <button
                    onClick={() => {
                   if (!item.available) {
                   alert("This product is currently out of stock!");
                   return;
                   }

                   navigate("/checkout");
                   }}
                    className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                    Rent Now
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="w-full mt-3 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Wishlist;