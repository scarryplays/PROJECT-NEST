import { useContext, useState } from "react";
import { AuthContext } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const storeToken = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const LogoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{ storeToken, token, isLoggedIn, LogoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
