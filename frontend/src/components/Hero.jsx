import React from "react";
import SearchBar from "./SearchBar";
import home from "../assets/home.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] pt-20 w-full mb-4">
      
      
      <img
        src={home}
        alt="Hero House"
        className="absolute inset-0  w-full h-full object-cover"
      />

    
      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6  text-white text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto lg:mx-0">
          Search from hundreds of premium properties across your city
        </p>

        <button onClick={() => navigate("/search")} className="bg-blue-600 w-fit px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Explore Properties
        </button>
      </div>

      
      <div className="  absolute bottom-4 sm:bottom-8 inset-x-0">
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
