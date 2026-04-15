import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userPrinciple, setUserPrinciple] = useState({});

  const login = (user) => {
    setUserPrinciple({
      name: "Manish Verma",
      email: "manishverma8244@gmail.com",
      image: "/favicon.svg",
      ...user,
    });
    setLoggedIn(true);
  };

  const logout = () => {
    setUserPrinciple({});
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, userPrinciple }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
export { AuthContext };