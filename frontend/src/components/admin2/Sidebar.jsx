
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {HousePlus, LayoutDashboard, MapPinHouse} from "lucide-react";
import Topbar from "./Topbar";


const Sidebar = ({sideOpen, setSideOpen}) => {


  return (
    <div>

      {sideOpen && (
        <div onClick={() => setSideOpen(false)} className="fixed inset-0 z-30 bg-black/40 md:hidden" />
      )}
      
      <aside className={`fixed md:static w-64 top-0 left-0 h-screen py-3 flex flex-col z-40  bg-indigo-600 text-white shadow-lg p-4 transform transition-transform duration-300 ${sideOpen ? "translate-x-0" :"-translate-x-full" } md:translate-x-0`}>
        
        <h1 className="p-2   text-lg mb-6 md:text-2xl font-bold text-white  md:font-bold  flex md:flex-col">
          Admin Panel
        </h1>

        <nav className="flex-1  md:px-2  md:mt-2 space-y-4">
          <NavLink to="/admin" onClick={() => setSideOpen(false)}
            className="flex items-center  gap-3 p-2 md:px-1 text-neutral-100  rounded hover:text-black hover:bg-blue-50">
              <LayoutDashboard className="w-5 h-5"/><span className=" md:inline">Dashboard</span>
            {/* <span className="md:hidden ">🏠</span> */}
          </NavLink>

          <NavLink to="/admin/properties" onClick={() => setSideOpen(false)}
            className="flex items-center gap-3 p-2 md:px-1 text-neutral-100 rounded hover:text-black hover:bg-blue-50">
            <MapPinHouse className="w-5 h-5" /><span className=" md:inline">Properties</span>
            {/* <span className="md:hidden">🏢</span> */}
          </NavLink>

          <NavLink to="/admin/add-property" onClick={() => setSideOpen(false)}
            className="flex items-center  gap-3 p-2 md:px-1 text-neutral-100 rounded hover:text-black hover:bg-blue-50">
            <HousePlus className="w-5 h-5" /><span className=" md:inline">Add Property</span>
            {/* <span className="md:hidden ">➕</span> */}
          </NavLink>
        </nav>
      </aside>

      {/* <div className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setSideOpen(true)}/>
      </div> */}

    </div>
  );
};

export default Sidebar;
