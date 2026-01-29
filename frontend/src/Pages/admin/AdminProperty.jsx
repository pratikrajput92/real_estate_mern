import { useEffect, useState } from "react";
import Layout from "../../components/admin2/Layout";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const AdminProperty = () =>{

  const {user} = useAuth();
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);


   console.log("USER =>", user);
  console.log("LOADING =>", loading);


    const fetchProperties = async () => {

      if(!user?.token) {
        console.log("❌ Token missing");
        setLoading(false);
        return;
      }

      try {
        const res = await api.get("/property/admin", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
         
        });

         console.log("API RESPONSE =>", res.data);
         setProperties(res.data.data);

      } catch (error) {
        console.error("Failed to fetch properties", error.response || error);
        alert("Failed to load properties. Check login.");
      } finally {
        setLoading(false);    
        }
    }
   
   useEffect(() => {
    fetchProperties();
   }, []);
   

  const handleDelete = async (id) => {
    if(!window.confirm("Are you sure you want to delete this property?")){
      return;
    }

    try {
      await api.delete(`/property/${id}`,{
        headers:{ 
          Authorization:`Bearer ${user.token}`,
        },
      });

      setProperties((prev) => 
        prev.filter((property) => property._id !== id) 
      );

    } catch (error) {
       console.error(error);
    alert("Delete failed");
    }
  };

  if (loading) return <p>Loading...</p>


  return(
    <div>
       <div className="  bg-white p-4 sm:p-6 rounded shadow w-full  mx-auto">
        <h2 className="text-2xl font-bold mb-6">All Properties</h2>

        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3">Type</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property) => (
              <tr key={property._id} className="border-t">
              <td className="p-3">{property.title}</td>
              <td className="p-3">{property.price}</td>
              <td className="p-3">{property.type}</td>
              <td className="p-3 space-x-3">
                <button 
                onClick={() => 
                  navigate(`/admin/property/edit/${property._id}`)
                }
                className="text-blue-600">Edit</button>
                <button onClick={() => handleDelete(property._id)}
                className="text-red-600">Delete</button>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>

        </div>
    </div>
  );
};

export default AdminProperty;