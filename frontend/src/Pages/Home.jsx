import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties"; // Array of properties
import FilterBar from "../components/FilterBar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChoosUs";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";

const Home = () => {

const [filter, setFilter] = useState("all");
  
const filteredProperties = 
        filter === "all" 
        ? properties: properties.filter((item) => item.type === filter);




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
          <PropertyCard key={property.id} property={property} />
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
