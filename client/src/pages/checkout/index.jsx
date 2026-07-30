import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    duration: "1 Month",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Rental Confirmed Successfully!");

    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-16">

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">

          <h1 className="text-4xl font-bold text-center mb-8">
            Checkout
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="pincode"
              placeholder="PIN Code"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="duration"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
            </select>

            <select
              name="payment"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700"
            >
              Confirm Rental
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Checkout;