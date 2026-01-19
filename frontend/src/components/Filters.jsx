
const Filters = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-fit  top-24">

      <h3 className="text-xl font-semibold mb-6">Filter Properties</h3>

      {/* LOCATION vala */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Location</label>
        <input
          type="text"
          placeholder="City or area"
          className="w-full border p-3 rounded"
        />
      </div>

      {/* PRICE vala */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Price Range</label>
        <select className="w-full border p-3 rounded">
          <option>Any</option>
          <option>₹10L - ₹30L</option>
          <option>₹30L - ₹60L</option>
          <option>₹60L+</option>
        </select>
      </div>

      {/* TYPE vala */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Property Type</label>
        <select className="w-full border p-3 rounded">
          <option>All</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>House</option>
        </select>
      </div>

      {/* BEDROOMS vala */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Bedrooms</label>
        <select className="w-full border p-3 rounded">
          <option>Any</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3+ BHK</option>
        </select>
      </div>

      <button className="w-full bg-blue-700 text-white py-3 rounded-lg">
        Apply Filters
      </button>

    </div>
  );
};

export default Filters;
