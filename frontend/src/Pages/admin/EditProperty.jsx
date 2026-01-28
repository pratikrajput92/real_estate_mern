import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import api from "../../api/axios";

const EditProperty = () => {

  const navigate = useNavigate();

  const { id } = useParams();
  const { user } = useAuth();

  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
  });

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    const res = await api.get(`/property/${id}`);
    setForm(res.data);
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.put(`/property/${id}`, form, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    alert('Property Updated');
    navigate('/admin/Properties');
  };

 return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
      <input
        name="title"
        value={property?.title || ""}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
        placeholder="Title"
      />

      <input
        name="price"
        value={property?.price ||""}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
        placeholder="Price"
      />

      <input
        name="location"
        value={property?.location || ""}
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