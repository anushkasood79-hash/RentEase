import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { CartContext } from "../../context/CartContext";

function Cart() {
   const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalRent = cart.reduce(
    (total, item) => total + item.rent * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            My Cart
          </h1>

          <p className="text-center text-gray-500 mt-3">
            Review your selected rental products.
          </p>

          {cart.length === 0 ? (
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold">
                Your Cart is Empty
              </h2>

              <p className="text-gray-500 mt-4">
                Add products from the Products page.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-12 space-y-6">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center"
                  >

                    <div className="flex items-center gap-5">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 object-cover rounded-lg"
                      />

                      <div>
                        <h2 className="text-2xl font-bold">
                          {item.name}
                        </h2>

                        <p className="text-gray-500">
                          {item.category}
                        </p>

                        <p className="text-blue-600 font-bold mt-2">
                          ₹{item.rent}/month
                        </p>
                      </div>

                    </div>

                    <div className="flex items-center gap-3 mt-6 md:mt-0">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="text-xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 px-3 py-1 rounded"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                ))}

              </div>

              <div className="bg-white rounded-xl shadow-md p-8 mt-10">

                <h2 className="text-3xl font-bold">
                  Order Summary
                </h2>

                <div className="flex justify-between mt-6 text-xl">

                  <span>Total Monthly Rent</span>

                  <span className="font-bold text-blue-600">
                    ₹{totalRent}
                  </span>

                </div>

                <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition cursor-pointer"
                >
                Proceed to Checkout
               </button>

              </div>
            </>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cart;