import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItemsArray = Object.values(cartItems);

  const handleRemove = (id) => {
    dispatch({ type: "cart/removeFromCart", payload: id });
  };

  const handleIncrease = (id) => {
    dispatch({ type: "cart/increaseQty", payload: id });
  };

  const handleDecrease = (id) => {
    dispatch({ type: "cart/decreaseQty", payload: id });
  };

  const totalPrice = cartItemsArray.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cartItemsArray.length === 0) {
    return (
      <div className="flex justify-center items-center h-96 text-xl font-semibold">
        Your Cart is Empty 🛒
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {/* LEFT SIDE */}
      <div className="md:col-span-2 space-y-4">
        {cartItemsArray.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 border rounded-2xl shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-28 h-28 object-cover rounded-xl"
            />

            <div className="flex flex-col justify-between w-full">
              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.delivery}</p>

                <div className="mt-2 font-bold text-lg">
                  ₹{item.price}
                </div>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="px-3 py-1 border rounded"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => handleIncrease(item.id)}
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-auto text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="border p-4 rounded-2xl shadow-sm h-fit">
        <h2 className="text-xl font-semibold mb-4">Price Details</h2>

        <div className="flex justify-between mb-2">
          <span>Total Items</span>
          <span>{cartItemsArray.length}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Total Price</span>
          <span>₹{totalPrice}</span>
        </div>

        <button className="w-full mt-4 bg-black text-white py-2 rounded-xl">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;