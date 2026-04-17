import { Link } from "react-router";
import { addProductToCart } from "../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      
      <Link to={`/productDetails/${product.id}`}>
        <img
          loading="lazy"
          className="h-40 w-full object-contain p-4 rounded-t-lg "
          src={product.image}
          alt={product.title}
        />
      </Link>

      <div className="px-5 pb-5 flex flex-col grow">
        <h5
          className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 h-12 overflow-hidden"
          title={product.title}
        >
          {product.title}
        </h5>

        {/* RATING */}
        <div className="flex items-center mt-2 mb-4">
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product?.rating?.rate || 0)
                    ? "text-yellow-300"
                    : "text-gray-400"
                }`}
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded ms-3">
            {product?.rating?.rate || "No Rating"}
          </span>
        </div>

        {/* PRICE + BTN */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹ {product.price}
          </span>

          <button
            onClick={() => dispatch(addProductToCart(product))}
            className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg text-sm"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;