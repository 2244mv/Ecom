import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

/* USER MENU */
const UserMenu = () => {
  const { userPrinciple, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* CLOSE DROPDOWN ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative user-menu">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex rounded-full"
      >
        <img
          className="w-8 h-8 rounded-full"
          src={userPrinciple?.image}
          alt="user"
        />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50"
          >
            <div className="px-4 py-3 border-b dark:border-gray-700">
              <p className="text-sm font-medium dark:text-white">
                {userPrinciple?.name}
              </p>
              <p className="text-xs text-gray-500">
                {userPrinciple?.email}
              </p>
            </div>

            <ul className="py-2 text-sm">
              <li>
                <NavLink
                  to="/dashboard/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/earnings"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Earnings
                </NavLink>
              </li>
            </ul>

            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* NAVBAR */
const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const cartCount = Object.values(cartItems).length;

  /* LOAD THEME */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  /* TOGGLE THEME */
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const linkClass = ({ isActive }) =>
    `block py-2 px-3 rounded ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 dark:text-white hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.svg" className="h-8" />
          <span className="text-xl font-bold dark:text-white">Ecom</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DARK MODE */}
          <button
            onClick={toggleTheme}
            className="text-xl dark:text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* CART */}
          <NavLink to="/cart" className="relative text-lg">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* AUTH */}
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div className="hidden md:flex gap-3">
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
              <Link to="/register" className="text-green-600">
                Register
              </Link>
            </div>
          )}

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4"
          >
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={linkClass}>About</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={linkClass}>Services</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={linkClass}>Contact</NavLink>

            {!isLoggedIn && (
              <div className="mt-3 flex flex-col gap-2">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="text-blue-600">
                  Login
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)} className="text-green-600">
                  Register
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;