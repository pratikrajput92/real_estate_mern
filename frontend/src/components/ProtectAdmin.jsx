import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectAdmin = ({children}) => {

  const {user} = useAuth();

  if(!user || user.role !== "admin"){
    return <Navigate to="/login"/>
  }

  if(user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectAdmin;