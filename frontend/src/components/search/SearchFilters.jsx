const SearchFilter = () => {
  return (
    <div className="space-y-6  ">

      <div>
        <h4 className="font-semibold mb-2">Location</h4>
        <div className="flex items-center border rounded px-3 py-2">
          <input
            type="text"
            placeholder="Los Angeles"
            className="w-full outline-none"
          />
          🔍
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Property Type</h4>
        <div className="grid grid-cols-2 gap-3">
          {["Rooms", "Tinyhouse", "Apartment", "Villa", "Townhouse", "Cottage"].map(
            (type) => (
              <button
                key={type}
                className="border rounded-lg py-4 text-sm hover:border-black"
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Price Range (Monthly)</h4>
        <input type="range" className="w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>$0</span>
          <span>$10000</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm">Beds</label>
          <select className="w-full border rounded p-2">
            <option>Any beds</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Baths</label>
          <select className="w-full border rounded p-2">
            <option>Any baths</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Square Feet</h4>
        <input type="range" className="w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>0 sq ft</span>
          <span>5000 sq ft</span>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Amenities</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Washer Dryer",
            "Air Conditioning",
            "Dishwasher",
            "WiFi",
            "Parking",
            "Pets Allowed",
            "Pool",
            "Gym",
          ].map((item) => (
            <button
              key={item}
              className="border rounded-full px-3 py-1 text-sm hover:bg-black hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Available From</h4>
        <input type="date" className="w-full border rounded p-2" />
      </div>

      <div className="sticky bottom-5 bg-white pt-4 space-y-2">
        <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded-lg">
          Apply
        </button>
        <button className="w-full border hover:bg-gray-300 py-3 rounded-lg">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
