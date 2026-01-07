import {  createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
// const {login} =useAuth();

export const AuthProvider = ({ children }) => {

  
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // const login = ({
  //   name: "Pratik",
  //   role: "user",
  // });


  const logout = () => {
    console.log("Logout Function running");

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => useContext(AuthContext);