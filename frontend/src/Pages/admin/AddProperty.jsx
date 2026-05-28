import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {

  const {user} = useAuth();
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "sale",
    category: "apartment",
    bedrooms: "",

  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  console.log(images, Array.isArray(images));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const formData = new FormData();

      formData.append('title', form.title);
      formData.append('description', form.description);
      formData.append('price', Number(form.price) );
      formData.append('location' , form.location);
      formData.append('type', form.type);
      formData.append('category', form.category.toLowerCase().trim());
      formData.append("bedrooms", Number(form.bedrooms));



      
      images.forEach(img => {
        formData.append('images', img);
      });


     
      const token = localStorage.getItem('token')

      const res = await api.post('/property', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
            
        },
      });
       navigate("/admin/properties");

      
    console.log(res.data);
    alert("Property Added Successfully");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Unauhtorized");
    }
  };

  return(
     <div>
       <div className=" bg-white p-4 mt-4  sm:p-4 rounded shadow w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Add New Property</h2>

       <form onSubmit={handleSubmit} >
         <input
          type="text"
          name="title"
          placeholder="Property Title"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"/>
          
        <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4">
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
        </select>


        <input type="file"
        name="images" multiple
        accept="image/*"
        onChange={(e)=> setImages(Array.from(e.target.files))}
        className="w-full border p-3 rounded mb-4"/>

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"/>

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"/>

        <select
            name="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4">
            <option value="">Select Bedrooms</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK</option>
        </select>


        <textarea
          placeholder="Description"
          name="description"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4 h-28"/>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border p-3  rounded mb-4 " >
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>


        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Add Property
        </button>
       </form>
      </div>
     </div>
  );
};

export default AddProperty;