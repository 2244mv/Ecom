import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const location = useLocation();

  const withoutFooter = [
    "/login",
    "/register",
    "/contact",
    "/services",
    "/about",
  ];

  return (
    <>
      <ToastContainer position="top-center" />

      <NavBar />

      <Outlet />

      {withoutFooter.includes(location.pathname) ? null : <Footer />}
    </>
  );
};

export default Layout;