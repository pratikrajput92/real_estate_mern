
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <aside className="h-screen py-3 md:px-4  flex flex-col z-40  bg-indigo-600 shadow-lg   ">


      
      <div className="p-2   text-lg mb-6 md:text-2xl font-bold text-white  md:font-bold  flex md:flex-col">
        Admin Panel
      </div>

      <nav className="flex-1  md:px-2  md:mt-2 space-y-4">
        <NavLink to="/admin"
          className="flex items-center  gap-3 p-2 md:px-1 text-neutral-100 rounded hover:text-black hover:bg-blue-50">
          <span className="hidden md:inline">🏠Dashboard</span>
          <span className="md:hidden ">🏠</span>
        </NavLink>

        <NavLink to="/admin/properties"
          className="flex items-center gap-3 p-2 md:px-1 text-neutral-100 rounded hover:text-black hover:bg-blue-50">
          <span className="hidden md:inline">🏢Properties</span>
          <span className="md:hidden">🏢</span>
        </NavLink>

        <NavLink to="/admin/add-property"
           className="flex items-center  gap-3 p-2 md:px-1 text-neutral-100 rounded hover:text-black hover:bg-blue-50">
          <span className="hidden md:inline">➕Add Property</span>
          <span className="md:hidden ">➕</span>
        </NavLink>
      </nav>
 
    </aside>
  );
};

export default Sidebar;
