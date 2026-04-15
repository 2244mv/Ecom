import { createBrowserRouter } from "react-router";

import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ProductDetails from "./pages/ProductDetails";
import LearnUseEffect from "./components/LearnUseEffect";
import TestWrapping from "./components/TestWrapping";
import Pricing from "./pages/Pricing";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard"; // ✅ import added

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },

      // ✅ ADMIN DASHBOARD ROUTE
      {
        path: "dashboard/admin",
        element: <AdminDashboard />,
      },

      // (optional dropdown pages)
      {
        path: "settings",
        element: <h1 className="text-3xl text-center mt-10">Settings Page</h1>,
      },
      {
        path: "earnings",
        element: <h1 className="text-3xl text-center mt-10">Earnings Page</h1>,
      },

      {
        path: "services",
        element: <Services />,
      },
      {
        path: "learnUseEffect",
        element: <LearnUseEffect />,
      },
      {
        path: "wrapping",
        element: <TestWrapping />,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
      },

      // ❗ ALWAYS KEEP LAST
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;