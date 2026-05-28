    
const Active ="px-4 py-5 border rounded-lg transition hover:bg-blue-600 hover:text-white";


const FilterBar = ({ filter, setFilter }) => {

  return(
    <div className="flex justify-center  flex-wrap gap-4  mt-6 mb-4 ">
       <button onClick={() => setFilter("all")} className={`${Active} ${filter === "all" ? "bg-blue-700 text-white font-bold" : ""}`}>ALL</button>

       <button onClick={() => setFilter ("apartment")} className={`${Active} ${filter === "apartment" ? "bg-blue-600 text-white font-bold" : ""}`}>APARTMENT</button>

       <button onClick={() => setFilter ("villa")} className={`${Active} ${filter === "villa" ? "bg-blue-700 text-white font-bold" : ""}`}>VILLA</button>

       <button onClick={() => setFilter ("house")} className={`${Active} ${filter === "house" ? "bg-blue-700 text-white font-bold" : ""}`}>HOUSE</button>   
    </div>

  );
  };

  export default FilterBar;

