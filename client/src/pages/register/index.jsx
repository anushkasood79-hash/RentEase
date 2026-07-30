import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Join RentEase today
          </p>

          <form className="mt-8">

            <div className="mb-5">
              <label className="block font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-5">
              <label className="block font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-5">
              <label className="block font-medium mb-2">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-blue-600 mt-2 text-sm"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>

          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>

      </section>
    </>
  );
}

export default Register;