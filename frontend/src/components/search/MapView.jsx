
const MapView = ({showList, setShowList}) => {
  return (
    <div className="w-full h-190 lg:pr-5 sm:h-150
     rounded-xl overflow-hidden  ">

      <iframe
        title="map"
        className="w-full h-full

                   pointer-events-none
                   lg:pointer-events-auto "
        src="https://www.openstreetmap.org/export/embed.html?bbox=-118.515%2C33.98%2C-118.35%2C34.07&layer=mapnik"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-full text-3xl pointer-events-none">
        
      </div>
      {/* <button
              onClick={() => setShowList(true)}
              className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 
              bg-blue-700 text-white px-6 py-3 mb-8 rounded-full shadow-lg z-50">
              Show Results
            </button> */}

    </div>
  );
};

export default MapView;
