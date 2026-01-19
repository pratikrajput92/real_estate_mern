import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {

  if (!property || !property.images || property.images.length === 0) {
    return null;
  }
  return (
    <Link
       to={`/property/${property.id}`}
      className="flex flex-col self-start border mt-4 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
>
     <img
        src={property.images[0]}
        alt={property.name}
        className="w-full h-55 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">{property.name}</h2>
        <p className="text-gray-500 text-sm">{property.location}</p>
        <p className="text-blue-600 font-bold mt-1">
          ₹{property.price}
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;
