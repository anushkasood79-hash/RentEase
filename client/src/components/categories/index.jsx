import { Link } from "react-router-dom";
import { FaBed, FaCouch, FaTv, FaSnowflake, FaBlender } from "react-icons/fa";

const categories = [
  {
    name: "Beds",
    value: "Bed",
    icon: <FaBed size={40} />,
  },
  {
    name: "Sofas",
    value: "Sofa",
    icon: <FaCouch size={40} />,
  },
  {
    name: "Televisions",
    value: "Television",
    icon: <FaTv size={40} />,
  },
  {
    name: "Refrigerators",
    value: "Refrigerator",
    icon: <FaSnowflake size={40} />,
  },
  {
  name: "Kitchen Appliances",
  value: "Kitchen Appliances",
  icon: <FaBlender size={40} />,
  }
];

function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Browse by Category
        </h2>

        <p className="text-gray-500 text-center mt-4">
          Choose from a wide range of rental furniture and appliances.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-14">

          {categories.map((item) => (
         <Link
          key={item.name}
          to={`/products?category=${encodeURIComponent(item.value)}`}
          className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 text-center cursor-pointer block"
         >
         <div className="text-blue-600 flex justify-center mb-5">
         {item.icon}
         </div>

         <h3 className="font-semibold text-lg">
         {item.name}
        </h3>
        </Link>
        ))}

        </div>

      </div>
    </section>
  );
}

export default Categories; 