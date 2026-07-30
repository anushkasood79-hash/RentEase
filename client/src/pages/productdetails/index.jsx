import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import products from "../../data/products";
import { CartContext } from "../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <h1 className="text-center text-3xl mt-20">
          Product Not Found
        </h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-lg w-full"
          />

          <div>

            <h1 className="text-5xl font-bold">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-3">
              {product.category}
            </p>

            <p className="text-blue-600 text-3xl font-bold mt-6">
              ₹{product.rent}/month
            </p>

            <p className="mt-2 text-lg">
              Deposit: ₹{product.deposit}
            </p>

            <p className="mt-3 text-lg">
              ⭐ {product.rating}
            </p>

            <p className="mt-6 text-gray-600 leading-7">
              {product.description}
            </p>

           <button
            onClick={() => navigate("/checkout")}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
            Rent Now
           </button>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;