const TestimonialCard = ({ item }) => {
  return (
    <div
      className="w-full max-w-md mx-auto flex flex-col h-full rounded-2xl border shadow-md p-6 text-center
      bg-white text-gray-900 border-gray-200
      dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
      transition-colors duration-300 hover:shadow-lg"
    >
      <img
        loading="lazy"
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />

      {/* ⭐ rating (optional) */}
      <div className="flex justify-center text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      <p className="italic text-gray-600 dark:text-gray-300">
        "{item.message}"
      </p>

      <h3 className="mt-4 font-semibold text-lg">
        {item.name}
      </h3>

      {/* <p className="text-sm text-gray-500 dark:text-gray-400">
        {item.role}
      </p> */}
    </div>
  );
};

export default TestimonialCard;