import { Link } from "react-router-dom";

const CTA = () =>{
  return(
    <section className="bg-indigo-600 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-lg mb-8 text-indigo-100">
           Browse verified properties or post your own property today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/properties" className="border border-white  px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-blue-700">
             Browse Properties
          </Link>

          <Link to="/contact" className="border border-white  px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-blue-700">
            Contact Again
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTA;