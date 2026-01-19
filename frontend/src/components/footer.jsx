import { Link } from "react-router-dom";

const Footer = () => {
  return(
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white mb-3">@pnaGhar</h3>
          <p className="text-sm">
             Find your perfect home with verified listings and trusted agents.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3"> Quick Links </h4>
          <ul className="space-y-2">
            <li><Link className="hover:text-white" to={"/"}>Home</Link></li>
            <li><Link className="hover:text-white" to={"/properties"}>Properties</Link></li>
            <li><Link className="hover:text-white" to={"/about"}>About</Link></li>
            <li><Link className="hover:text-white" to={"/contact"}>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2">
            <li>Buy Property</li>
            <li>Sell Property</li>
            <li>Rent Property</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p>Email: support@pnaGhar.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
         © {new Date().getFullYear()} @pnaGhar. All rights reserved.
     
      </div>
    </footer>
  );
};

export default Footer;