import { motion } from "motion/react";

const Services = () => {
  const services = [
    {
      title: "Fast Delivery",
      desc: "Get your orders delivered at lightning speed with real-time tracking.",
      features: ["Same-day delivery", "Live tracking", "Safe packaging"],
      icon: "🚚",
    },
    {
      title: "Secure Payments",
      desc: "We ensure your transactions are safe and encrypted.",
      features: ["SSL security", "Multiple payment options", "Fraud protection"],
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      desc: "Our support team is always available to help you.",
      features: ["Live chat", "Email support", "Quick response"],
      icon: "💬",
    },
  ];

  const steps = [
    "Browse Products",
    "Add to Cart",
    "Secure Checkout",
    "Fast Delivery",
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">

      {/* HERO */}
      <div className="text-center py-16 px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Premium Services
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Everything you need for a seamless shopping experience
        </p>
      </div>

      {/* SERVICES CARDS */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              {service.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {service.desc}
            </p>

            {/* FEATURES LIST */}
            <ul className="space-y-2">
              {service.features.map((f, i) => (
                <li key={i} className="text-sm text-gray-500 dark:text-gray-400">
                  ✅ {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

     

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">

        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Why Choose Us?
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>✔ Trusted by thousands of customers</li>
            <li>✔ High-quality products</li>
            <li>✔ Easy returns & refunds</li>
            <li>✔ Affordable pricing</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default Services;