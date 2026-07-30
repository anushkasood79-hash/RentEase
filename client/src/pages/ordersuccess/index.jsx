import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen flex items-center justify-center py-16">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">

          <div className="text-6xl mb-6">✅</div>

          <h1 className="text-4xl font-bold text-green-600">
            Rental Confirmed!
          </h1>

          <p className="text-gray-600 mt-4">
            Thank you for choosing RentEase.
          </p>

          <div className="bg-slate-100 rounded-xl p-6 mt-8 text-left">
            <p><strong>Order ID:</strong> RE123456</p>
            <p><strong>Status:</strong> Confirmed</p>
            <p><strong>Delivery:</strong> Within 2-3 Business Days</p>
          </div>

          <div className="mt-8 flex justify-center gap-4">

            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </Link>

            <Link
              to="/dashboard"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              My Dashboard
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default OrderSuccess;