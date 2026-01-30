import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import api from "../../api/axios";


const Login = () =>{

  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const handleUserLogin = async () => {    
    try {
      setLoading(true);

      const res =  await api.post("/auth/login",{
        email,
        password
      });
       
      const userData = {...res.data.user, token: res.data.token}
       
      login(userData);
      localStorage.setItem("user",JSON.stringify(userData));

      navigate("/");

    } catch (error) {
      console.error('Login Failed:',error);
      alert(error.response?.data?.message || "Login failed, check Email & Password");
    }
  }

  const handleAdminLogin = async () => {
    try {
      setLoading(true);

      const res = await api.post("/auth/admin/login",{
        email,
        password,
      
      });
        
      
      const userData = {
          ...res.data.user,
          token: res.data.token,
        };

      login(userData);
      localStorage.setItem("user",JSON.stringify(userData));


      navigate("/");
    } catch (error) {
      console.error("Admin Login Failed:",error);
      alert(error.response?.data?.message || "Admin Login Failed");
    } finally{
      setLoading(false);
    }
  }



  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
     <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 ">
      <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

      <input type="email" 
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full border p-3 rounded mb-4"/>

      <input type="password" 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
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

      <p className="text-center mt-6 text-sm text-gray-400">
        Admin?
        <span
          onClick={() => navigate("/admin/signup")}
          className="text-red-600 cursor-pointer ml-1">
          Access
        </span>
      </p>


     </div>

    </div>
  );
};

export default Login;