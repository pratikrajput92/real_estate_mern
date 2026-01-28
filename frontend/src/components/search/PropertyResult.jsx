
const PropertyResults = () => {
  return (
    <div className="space-y-4 h-full p-2  bg-white">
      <h4 className="font-semibold text-lg">1 Place in Los Angeles</h4>

      <div className="border rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          className="h-50 w-full object-cover"
        />

        <div className="p-4 space-y-2">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            Pets Allowed • Parking Included
          </span>

          <h3 className="font-semibold">Cozy Beach House</h3>
          <p className="text-sm text-gray-500">
            456 Ocean Ave, Santa Monica
          </p>

          <div className="flex justify-between text-sm">
            <span>🛏 3 Bed • 🛁 2 Bath</span>
            <span className="font-bold">$2000 / month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyResults;


// import { useEffect, useState } from "react";
// import api from "../api/axios";   // ya correct relative path

// const PropertyResult = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       const res = await api.get("/properties");
//       setProperties(res.data);
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <div>
//       {properties.map((p) => (
//         <div key={p._id}>
//           <h3>{p.title}</h3>
//           <p>{p.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PropertyResult;
