import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function History() {
  const history = [
    {
      id: 1,
      product: "Luxury Sofa",
      amount: "₹1,899/month",
      date: "12 June 2026",
      status: "Completed",
    },
    {
      id: 2,
      product: "Smart LED TV",
      amount: "₹999/month",
      date: "28 May 2026",
      status: "Completed",
    },
    {
      id: 3,
      product: "Microwave Oven",
      amount: "₹799/month",
      date: "10 April 2026",
      status: "Completed",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-100 py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Rental History
          </h1>

          <div className="space-y-6">
            {history.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-5 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">
                    {item.product}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Rental Date: {item.date}
                  </p>

                  <p className="text-blue-600 font-semibold">
                    {item.amount}
                  </p>
                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                  {item.status}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default History;