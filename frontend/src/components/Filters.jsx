
const Filters = ({filters, setFilters}) => {

  const handleChange = (e) => {
    setFilters({
      ...filters, [e.target.name] : e.target.value,
    });
  };
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-fit  top-24">

      <h3 className="text-xl font-semibold mb-6">Filter Properties</h3>

      {/* LOCATION vala */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="City or area"
          className="w-full border p-3 rounded"
        />
      </div>

      {/* PRICE vala */}
       <div className="mb-5">
        <label className="block mb-2 font-medium">Min Price</label>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-medium">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
      </div>

      {/* TYPE vala */}
      <div className="mb-5">
        <label className="block mb-2 font-medium">Property Type</label>
        <select
        name="category"
        value={filters.category}
        onChange={handleChange}
         className="w-full border p-3 rounded">
          <option value="">All</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="house">House</option>
        </select>
      </div>

      {/* BEDROOMS vala */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Bedrooms</label>
        <select 
        name="bedrooms"
        value={filters.bedrooms}
        onChange={handleChange}
         className="w-full border p-3 rounded">
          <option>Any</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
        </select>
      </div>

      <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded-lg">
        Apply Filters
      </button>

    </div>
  );
};

export default Filters;
