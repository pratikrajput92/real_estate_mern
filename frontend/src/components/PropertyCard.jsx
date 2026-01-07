import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {

  if (!property || !property.images || property.images.length === 0) {
    return null;
  }
  return (
    <Link to={`/property/${property.id}`} className="border  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      <img
        src={property.images[0]}
        alt={property.name}
        className=" grid w-full lg:h-80  sm:h-[50vh] object-cover"
      />
      <div className="p-4 pt-2">
        <h2 className="font-bold text-xl">{property.name}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-semibold mt-2">${property.price}</p>
      </div>
    </Link>
  );
};

export default PropertyCard;
