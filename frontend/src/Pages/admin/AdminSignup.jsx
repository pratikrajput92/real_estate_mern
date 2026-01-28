import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const AdminSignup = ()=> {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdminSignup = async ()=> {
    if(!adminKey) {
      return alert('Admin Key is Required');
    }

    try {
      setLoading(true);

      await api.post("/auth/admin/signup",{
        name,
        email,
        password,
        adminKey,
      });

      alert('Admin Account Created Successfully');
      navigate('/login');
    } catch (error) {
      alert('error.response?.data?.message || "Admin signup failed');

    }finally{
      setLoading(false);
    }
  }


  return(
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Admin Registration
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Admin Secret Key"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
          className="w-full border p-3 rounded mb-6"
        />

        <button
          onClick={handleAdminSignup}
          disabled={loading}
          className="w-full bg-red-700 text-white py-3 rounded hover:bg-red-800 disabled:opacity-50"
        >
          {loading ? "Creating Admin..." : "Create Admin"}
        </button>
      </div>
    </div>
  
  )
};

export default AdminSignup;