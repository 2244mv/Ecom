import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./Router.jsx";
import AuthContextWrapper from "./context/AuthContextWrapper.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>

  <AuthContextWrapper>
    <RouterProvider router={router} />
  </AuthContextWrapper>,
  </Provider>
);
