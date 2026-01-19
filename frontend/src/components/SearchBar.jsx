import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const navigate = useNavigate();
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className=" relative  backdrop-blur-md  shadow-xl   rounded-xl p-4 sm:p-6 flex  sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
      
      <input
        type="text"
        placeholder="Location"
        className="border w-full sm:w-48 md:w-64 text-black font-semibold p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      />

      <select className="border w-full sm:w-40  p-3 rounded-lg text-black  font-semibold">
        <option  >Property Type</option>
        <option className="text-black">Apartment</option>
        <option className="text-black">Villa</option>
        <option className="text-black">House</option>
      </select>

      <select className="border w-full sm:w-40 p-3 rounded-lg text-black font-semibold">
        <option>Max Price</option>
        <option>$500,000</option>
        <option>$1,000,000</option>
        <option>$2,000,000</option>
      </select>

      <button 
        onClick={(e) => {
          e.preventDefault();
          navigate("/search");
        }}
       className="w-full sm:w-auto bg-blue-700 text-white px-5 py-3 rounded-sm font-semibold hover:bg-blue-800 transition">
        Search
      </button>
    </div>
    </div>
  );
};

export default SearchBar;
