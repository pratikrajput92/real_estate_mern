import { useState } from "react";
import { FiSearch, FiSliders, FiMenu, FiX } from "react-icons/fi";

const SearchTopBar = ({showFilters, toggleFilters}) => {

 return (
  
<div className=" sticky top-4 pt-14 md:px-6 px-2 mb-4  sm:px-4 w-full flex justify-center z-40 ">

  <div className="bg-white shadow-lg rounded-xl  mr-1 w-full max-w-5xl px-2 sm:px-4 py-3 ">

    <div className="flex flex-col gap-3  md:flex-row md:items-center md:gap-3 ">
      
     
        
       <button onClick={toggleFilters}
         className=" px-2 py-2 text-sm w-full  border rounded">
         {/* {showFilters ? "✕ Filters" : "☰ All Filters "} */}
         ☰ All Filters
          </button>
   


      <div className="flex  items-center gap-2 border rounded px-3 py-2 w-full md:w-52">
        <FiSearch className="text-gray-500" />
        <input
          placeholder="Search location"
          className="outline-none  text-sm w-25"
        />
      </div>

      <select className="border rounded w-full px-2 py-2 text-sm outline-none">
        <option>Price</option>
        <option>$500 – $1000</option>
        <option>$1000 – $2000</option>
        <option>$2000+</option>
      </select>

      <select className="border rounded px-2 py-2 w-full text-sm outline-none">
        <option>Beds</option>
        <option>1 Bed</option>
        <option>2 Beds</option>
        <option>3+ Beds</option>
      </select>

      <select className="border rounded px-2 py-2 w-full text-sm outline-none">
        <option>Baths</option>
        <option>1 Bath</option>
        <option>2 Baths</option>
        <option>3+ Baths</option>
      </select>

      <button className="bg-blue-700 hover:bg-blue-500 w-full flex items-center justify-center gap-2 text-white p-2 rounded">
        <FiSliders />Filters
      </button>

    </div>
  </div>
</div>
 );
};

export default SearchTopBar;    


  // <div
  //       className="   fixed top-16  left-0 w-full z-40 bg-white
  //        shadow-lg rounded-2xl px-3 py-3   ">

       
  //       <div className="flex flex-wrap items-center gap-3">

  //          <button onClick={toggleFilters}
  //             className=" px-2 py-2 border rounded-full">
  //               {showFilters ? "✕ Filters" : "☰ All Filters "}
  //             </button>

  //         <div className="flex items-center  gap-2 border rounded-full px-3 py-2 flex-1 ">

  //           <FiSearch className="text-gray-500" />
  //           <input
  //             type="text"
  //             placeholder="Search location"
  //             className="outline-none  text-sm w-32 "
  //           />
  //         </div>

  //         <button className="border rounded-full px-4 py-2 text-sm">
  //           Price
  //         </button>

  //         <button className="border rounded-full px-4 py-2 text-sm">
  //           Beds
  //         </button>

  //         <button className="border rounded-full px-4 py-2 text-sm">
  //           Baths
  //         </button>

  //         <button className=" flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-600 px-3 py-2 rounded-full text-sm">
  //           <FiSliders />
            
  //         </button>
  //       </div>
  //     </div>
