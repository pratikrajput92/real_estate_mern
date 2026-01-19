
const AddProperty = () => {
  return(
     <div>
       <div className=" bg-white p-4 mt-4  sm:p-4 rounded shadow w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Add New Property</h2>

        <input
          type="text"
          placeholder="Property Title"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded mb-4 h-28"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Add Property
        </button>
      </div>
     </div>
  );
};

export default AddProperty;