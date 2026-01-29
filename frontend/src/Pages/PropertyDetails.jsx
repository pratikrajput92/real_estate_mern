import { useParams } from "react-router-dom"
import ImageSlider from "../components/ImageSlider";
import agent1 from "../assets/agent/agent1.jpg";
import PropertyCard from "../components/PropertyCard";
import { FaBath,  FaBed,  FaRulerCombined,  } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../api/axios";


const InfoCard = ({icon: Icon, label, value }) => (
  <div className="bg-gray-100 p-4 rounded-lg text-center">
    {Icon && <Icon className="text-blue-600 text-2xl"/>}
    <p className="text-gray-500">{label}</p>
    <h3>{value}</h3>
  </div>
);

const Section = ({title, children}) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);
 

const PropertyDetails = () => {

  const {id} = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similar, setSimilar] = useState([]);


  const fetchProperty = async () => {
    try {
      const res = await api.get(`/property/${id}/public`);
      setProperty(res.data);

      if(res.data.similar && res.data.similar.length){
        setSimilar(res.data.similar);
      }else{
        const allRes = await api.get("/property");
        setSimilar(allRes.data.filter(p => p._id !== id).slice(0, 3));
      }
    } catch (error) {
       console.error("Property fetch failed", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProperty();

  }, [id]);

  console.log(property);
  


   if (loading) {
    return <p className="text-center mt-20">Loading property...</p>;
  }

  if(!property){
    return <div className="text-center mt-10">Property Not Found</div>
  }
 
  const BACKEND_URL = "http://localhost:5000";

  return(
    <div className="max-w-6xl mx-auto px-6  py-10">
        
        <ImageSlider
         images={property.images?.map(img => 
         `${BACKEND_URL}${img}`) || []}  />

         {/* yha pe property ki details ha  */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
        <p className="text-gray-500 mb-4">{property.location}</p>
        <p className="text-blue-600 text-2xl font-semibold mb-4">${property.price}</p>
        </div>

        {/* yha pr property ka overview ha  */}
        <Section title="Property Details">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8" >
          <InfoCard icon={FaBed} label="Bedrooms" value="3"/>
          <InfoCard icon={FaBath} label="Bathrooms" value="2"/>
          <InfoCard icon={FaRulerCombined} label="Area" value="1800 sqft"/>
          <InfoCard label="Type" value={property.type}/>
        </div>

        </Section>
        
        {/* yha pr Description diya  */}
        <section title="Description">
          <p className="text-gray-700 leading-relaxed">
            {property.description || "No description Available."}
           This is a luxury property with modern architecture, premium facilities
           and prime location. Perfect for families and investors.
        </p>
        </section>

        {/* Property ke sath extra featuers */}
        <section title="Amenities">
          <div className="grid grid-cols-2 md-grid-cols-3 gap-4 mb-8">
            {property.amenities?.map((item, index) => (
              <div key={index} className="bg-indigo-200 text-blue-700 p-3 rounded-lg text-center">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* yha pr MAP (Google map ka url dala ha ) ha  */}
        <section title="Location">
          <iframe 
          src={`https://www.google.com/maps?q=${encodeURIComponent(property.location || "New York")}&output=embed`}className="w-full h-100 rounded-xl border mb-6" loading="lazy"></iframe>
        </section>

        {/* yha Agent Card banya ha  */}

        <div className="bg-white shadow-lg rounded-xl p-6 flex gap-4 items-center mb-12">
          <img src={agent1} className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-lg ">Jhon Doe</h3>
            <p className="text-gray-500">Senior Property Agent</p>
            <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">Contact Agent</button>
          </div>
        </div>

        {/* yha similar property ke liye  */}
        <h2 className="text-2xl font-semibold mb-6">Similar Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
           {similar?.map((item) =>(
            <PropertyCard key={item._id} property={item}/>
           ))}
        </div>
    </div>
  );
};

export default PropertyDetails;