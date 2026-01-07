import { useState } from "react";
// import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties"; // Array of properties
import FilterBar from "../components/FilterBar";
import Hero from "../components/Hero";

const Home = () => {

const [filter, setFilter] = useState("all");
  
const filteredProperties = filter === "all" ? properties: properties.filter((item) => item.type === filter);
  return (
    <div className="pt-16">
      <Hero/>
      <FilterBar setFilter={setFilter} />
      <div className="max-w-full  mx-auto px-6 py-12 grid lg:grid-cols-3 sm:grid-cols-1   items-center justify-center gap-8">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
