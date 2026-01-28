import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const Signup = () => {

const navigate = useNavigate();

const [name, setName] = useState("");
const [email, SetEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const handleSignup = async () => {
  try {
    setLoading(true);

    const res = await api.post("/auth/signup",{
      name: name,
      email: email,
      password: password,
    });

    alert("Account Created Successfully!");
    navigate("/login");
  } catch (error) {
    alert(error.response?.data?.message || "signup failed");
  } finally{
    setLoading(false);
  }
};

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
       <div className=" w-full max-w-md bg-white shadow-xl rounded-2xl p-8 ">
         <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

         <input type="text"
          placeholder="Full Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded mb-4"/>

          <input type="email"
           placeholder="Email" 
           value={email}
           onChange={(e) => SetEmail(e.target.value)}
           className="w-full border p-3 rounded mb-4"/>
          
          <input type="password"
           placeholder="Password" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="w-full border p-3 rounded mb-4"/>

           <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800">
              {loading ? "Creating..." : "Sign Up"}
            </button>

           <p className="text-center mt-4 text-gray-600">Already have an Account?{""}
            <Link to={"/login"} className="text-blue-700">Login</Link>
           </p>
          </div>

    </div>
  );
};

export default Signup;