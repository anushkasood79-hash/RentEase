import {
  FaTruck,
  FaTools,
  FaWallet,
  FaRecycle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaWallet size={40} />,
    title: "Affordable Rentals",
    description:
      "Save money with flexible monthly rental plans instead of buying expensive furniture.",
  },
  {
    icon: <FaTruck size={40} />,
    title: "Fast Delivery",
    description:
      "Quick doorstep delivery and pickup at your preferred date and location.",
  },
  {
    icon: <FaTools size={40} />,
    title: "Free Maintenance",
    description:
      "Enjoy hassle-free maintenance support throughout your rental period.",
  },
  {
    icon: <FaRecycle size={40} />,
    title: "Flexible Plans",
    description:
      "Extend, upgrade, or return products whenever your needs change.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose RentEase?
        </h2>

        <p className="text-center text-gray-500 mt-4">
          We make renting furniture and appliances simple, affordable, and reliable.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;