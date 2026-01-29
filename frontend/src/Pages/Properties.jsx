import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import PropertyCard from "../components/PropertyCard"
import api from "../api/axios";

const Properties = () => {


  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    try {
      const res = await api.get("/property");
      setProperties(res.data);

    } catch (error) {
      console.error("Failed to fetch properties", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchProperties();
  }, []);


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

        <Filters/>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Properties;




// const Properties = () => {
//   return (
//     <div className="max-w-full overflow-hidden lg:px-24 px-4  mx-auto  pt-24 pb-12">

//        <h1 className="text-4xl font-bold mb-6">All Properties</h1>

//        {/* yha filter ka option bana ha  */}

//        <div className="flex gap-4 mb-8">
//         <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">All</button>
//         <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">Apartment</button>
//         <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">Villa</button>
//         <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">House</button>

//        </div>

//        {/* yha Property Grid ha  */}
//        <div className="grid lg:w-450 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {properties.map((item) => (
//           <PropertyCard key={item.id} property={item}/>
//         ))}
//        </div>
//     </div>
//   );
// };






