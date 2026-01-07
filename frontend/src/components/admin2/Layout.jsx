import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

const Layout = ({children}) => {
  return(
    <div className="flex h-screen bg-gray-100 ">

      <div className="w-20 sm:w-30 md:h-64 lg:w-64  bg-gray-100">

      <Sidebar/>
    </div>

      <div className="flex-1 flex flex-col">
        <Topbar/>

        <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <Outlet/>
        </main>

      </div>
    </div>
    
  );
};

export default Layout;