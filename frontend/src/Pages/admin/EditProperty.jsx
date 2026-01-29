import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import api from "../../api/axios";

const EditProperty = () => {

  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchProperty = async () => {
      try {
        const res = await api.get(`/property/${id}`,{
          headers: {
            Authorization: `Bearer ${user.token}`,
          },

        });

        setForm({
          title: res.data.title || "",
          price: res.data.price || "",
          location: res.data.location || "",
        });


      } catch (error) {
        console.error(error);
        setError("Property Laad Nhi Ho Pari");
      } finally {
        setLoading(false);
      }
  };
   

  useEffect(() => {
    if(user?.token && id){
      fetchProperty(); 
    } else {
      setLoading(false);
    }
  }, [user, id]);


  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/property/${id}`, form, {
         headers: {
          Authorization: `Bearer ${user.token}`,
         }
      });

      alert("Property Update");
      navigate("/admin/properties");

    } catch (error) {
       console.error(error);
      alert("Update failed");
    }
   
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;


 return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
        placeholder="Title"
      />

      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
        placeholder="Price"
      />

      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
        placeholder="Location"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Update

      </button>
    </form>
  );
};

export default EditProperty;