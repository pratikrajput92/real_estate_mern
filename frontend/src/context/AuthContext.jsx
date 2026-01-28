import {  createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if(storedUser){
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
    
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

 

  const logout = () => {
    console.log("Logout Function running");

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    
    setUser(null);
  };

  if(loading) return null;

  return (
    <AuthContext.Provider value={{user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => useContext(AuthContext);