import { useState } from "react";
import MapView from "../components/search/MapView";
import PropertyResults from "../components/search/PropertyResult";
import SearchFilter from "../components/search/SearchFilters";
import SearchTopBar from "../components/search/SearchTopBar";

const Search = () => {

  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  return (

    <div className=" mb-8  pr-2 p-2 overflow-hidden min-h-screen bg-gray-50">

      <SearchTopBar showFilters={showFilters}  toggleFilters={toggleFilters}/>

      <div className=" flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-112px)]">

      <div className={` transition-all duration-300 mt-2  bg-white border-b lg:border-r ${showFilters ? "block" : "hidden"}  lg:w-[40vw]`} >

        <div className="h-full   overflow-y-auto p-4">
          <SearchFilter/>
        </div>

       </div>

       
        <div className="  p-6 md:pr-1 mb-4  lg:h-full sm:w-[95vw] lg:col-span-6">
          <MapView />
        </div>

        <div className="px-2 mt-4 border-t lg:border-t-0  lg:w-[40vw] lg:col-span-3 lg:border-l">
          <PropertyResults />
        </div>

      </div>
    </div>

  );
};

export default Search;


//  {showList && (
//           <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto p-4">
//             <button
//               onClick={() => setShowList(false)}
//               className="mb-4 text-blue-700 font-semibold"
//             >
//               ← Back to Map
//             </button>

//             <PropertyResults />
//           </div>
//         )}