import { useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";

// custom hook
const useAuth = () => {
  const authContextData = useContext(AuthContext);

  if (!authContextData) {
    throw new Error("useAuth must be used within AuthContextWrapper");
  }

  return authContextData;
};

export default useAuth;