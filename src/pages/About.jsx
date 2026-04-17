import { motion } from "motion/react";

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* HERO */}
      <div className="text-center py-16 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Our Store
        </motion.h1>
        <p className="mt-4 text-lg opacity-90">
          We redefine your shopping experience
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Who We Are
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We are a modern e-commerce platform focused on delivering quality
            products.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { label: "Customers", value: "10K+" },
            { label: "Orders", value: "50K+" },
            { label: "Products", value: "5K+" },
          ].map((item, i) => (
            <div key={i} className="p-6 shadow rounded-xl">
              <h3 className="text-3xl font-bold text-blue-600">
                {item.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;