import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChoosUs";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import api from "../api/axios";

const Home = () => {

const [properties, setProperties] = useState([]);
const [loading, setLoading] = useState(true);

const [filter, setFilter] = useState("all");


const fetchProperties = async () =>{
  try {
    const res = await api.get('/property');
    setProperties(res.data);

  } catch (error) {
    console.error('Failed To Fetch Properties', error);
  } finally{
    setLoading(false);
  }
};

useEffect(()=> {
  fetchProperties();
}, []);
  
const filteredProperties = 
        filter === "all" 
        ? properties: properties.filter((item) => item.type === filter);

if (loading) {
  return <p className="text-center mt-20">Loading properties...</p>;
}



  return (
    <div className="pt-16 ">
      <Hero/>

      <section className="max-w-7xl mx-auto px-4 py-16">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured Properties
        </h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Browse handpicked properties curated by our expert agents.
        </p>

        <FilterBar setFilter={setFilter} />
        
      <div className="max-w-full  mx-auto px-6 py-12 grid lg:grid-cols-3 sm:grid-cols-1   items-center justify-center gap-8">
        {filteredProperties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
      
      </section>

      <WhyChooseUs/>
      <Stats/>
      <HowItWorks/>
      <CTA/>
      
    </div>
  );
};

export default Home;
