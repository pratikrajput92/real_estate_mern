import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Topbar = () => {
  
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
   <header className="  h-16 bg-white shadow flex items-center justify-between   px-6 md:px-6 sticky top-0 z-50">
    <h1 className="text-xl md:text-xl font-semibold">Dashboard</h1>

    <button onClick={handleLogout} className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 md:px-4 md:py-2 rounded">Logout</button>

   </header>
  );
};

export default Topbar;
