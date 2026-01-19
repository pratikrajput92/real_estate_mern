import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { useState } from "react";

const Layout = () => {

  const [sideOpen, setSideOpen] = useState(false);


  return(
    <div className="flex h-screen overflow-hidden bg-gray-100 ">

       
      <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen}/>
 

      <div className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setSideOpen(true)}/>

        <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <Outlet/>
        </main>

      </div>
    </div>
    
  );
};

export default Layout;