import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const Login = () =>{

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleUserLogin = () => {
    login({
      name: "Normal User",
      role: "user",
    });
    navigate("/");
  };


  const handleAdminLogin = () => {
    const userData = {
      name: "Admin",
      role: "admin",
    };

    login(userData);
     navigate("/admin") 
  }

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
     <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 ">
      <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

      <input type="email" 
      placeholder="Email"
      className="w-full border p-3 rounded mb-4"/>

      <input type="password" 
      placeholder="Password"
      className="w-full border p-3 rounded mb-4"/>

      <button
       onClick={handleUserLogin}
       className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 mb-4">User</button>


      <button
       onClick={handleAdminLogin}
       className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800">Admin</button>

      <p className="text-center mt-4 text-gray-600">Don't have an Account?{""}
      <Link to={"/signup"} className="text-blue-700">Sign Up</Link>
      </p>
     </div>

    </div>
  );
};

export default Login;