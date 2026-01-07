import PropertyCard from "../components/PropertyCard"
import properties from "../data/properties"

const Properties = () => {
  return (
    <div className="max-w-full lg:px-24 px-4  mx-auto  pt-24 pb-12">

       <h1 className="text-4xl font-bold mb-6">All Properties</h1>

       {/* yha filter ka option bana ha  */}

       <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">All</button>
        <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">Apartment</button>
        <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">Villa</button>
        <button className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white">House</button>

       </div>

       {/* yha Property Grid ha  */}
       <div className="grid lg:w-450 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {properties.map((item) => (
          <PropertyCard key={item.id} property={item}/>
        ))}
       </div>
    </div>
  );
};

export default Properties;







