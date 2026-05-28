import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import PropertyCard from "../components/PropertyCard"
import api from "../api/axios";

const Properties = () => {


  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
  category: "all",
  location: "",
  minPrice: "",
  maxPrice: "",
  bedrooms: "",
});


  const fetchProperties = async () => {
    try {
      const res = await api.get("/property",{
        params: {
          category: filters.category !== "All" ? filters.category : undefined,
          location : filters.location || undefined,
          minPrice: filters.minPrice || undefined,
          maxPrice: filters.maxPrice || undefined,
          bedrooms: filters.bedrooms || undefined,
        },
      });
      setProperties(res.data);

    } catch (error) {
      console.error("Failed to fetch properties", error);
    } finally {
      setLoading(false);
    }
  }

  

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProperties();
    }, 500);
    return () => clearTimeout(timer);
  }, [filters]);


  if(loading) {
     return <p className="text-center mt-20">Loading properties...</p>;

  }

  return (
    <div className="pt-15  bg-gray-50 min-h-screen">

      
      <div className="bg-white shadow-sm py-6 px-6">
        <h2 className="text-2xl font-semibold">
          Showing <span className="text-blue-700">{properties.length}</span> Properties
        </h2>
      </div>

      <div className="max-w-full mx-auto px-8  py-10 grid lg:grid-cols-[280px_1fr] gap-10">

        <Filters filters={filters} setFilters={setFilters}/>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((item) => (
            <PropertyCard key={item._id} property={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Properties;









