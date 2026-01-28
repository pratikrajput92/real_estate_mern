import  { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { useAuth } from "../context/AuthContext";
// import logo from "../assets/logo.png";

const Navbar = () => {


  const Active = "block px-3 py-2 rounded transition hover:bg-gray-100 hover:text-blue-500  "

     
     const [open, setOpen] = useState(false);
     const {user, logout} = useAuth();

  return (
    
     

    <nav className="fixed  top-0 left-0 w-full h-16 md:w-full  bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center  justify-center space-x-2 text-xl font-bold text-rose-600 cursor-pointer">
          <img src={logo2} alt="logo" className="w-15 h-10"/>
          
          @pnaGhar
        </div>


        <ul className="hidden items-center md:flex gap-6 text-gray-700 font-medium">
          <NavLink to={"/"} end className={({isActive}) => `${Active} ${isActive ? "bg-gray-200 text-lg text-indigo-700 font-bold hover:text-blue-500 transition cursor-pointer" : ""}`}>Home</NavLink>
         <NavLink to={"/properties"} end className={({isActive}) => `${Active} ${isActive ? "bg-gray-200 text-lg text-indigo-700 font-bold hover:text-blue-500 transition cursor-pointer" : ""}`}>Properties</NavLink>
          <NavLink to={"/about"} end className={({isActive}) => `${Active} ${isActive ? "bg-gray-200 text-lg text-indigo-700 font-bold hover:text-blue-500 transition cursor-pointer" : ""}`}>About</NavLink>
          <NavLink to={"/contact"} end className={({isActive}) => `${Active} ${isActive ? "bg-gray-200 text-lg text-indigo-700 font-bold hover:text-blue-500 transition cursor-pointer" : ""}`}>Contact</NavLink>

        {/* admin button  */}
            {user && user.role === "admin" && (
              <Link to="/admin" className="text-blue-700 font-semibold ">
              Admin
              </Link>
            )}
         </ul>

        <div className="flex items-center gap-3">
          <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
           
         {/* login logout ke liye   */}

         {!user ?(
          <Link to={"/login"} className="  bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 hidden md:block " >Sing In</Link> 
            ):(
            <button onClick={logout}
            className="bg-red-600 hover:bg-red-500 text-white px-4  py-2  hidden md:block rounded"
            >Logout</button>
          )}
          </div>
        
        {/* small screen ke liye  */}
        {open && (
          <div className=" absolute top-16 right-0  md:hidden bg-white shadow-lg px-6 py-4 space-y-4 w-48 flex flex-col items-center">
             <Link onClick={()=> setOpen(false)} to="/" className="block">Home</Link>
             <Link onClick={()=> setOpen(false)} to="/properties" className="block">Properties</Link>
             <Link onClick={()=> setOpen(false)} to="/about" className="block">About</Link>
             <Link onClick={()=> setOpen(false)} to="/contact" className="block">Contact</Link>

             {user && user.role === "admin" && (
              <Link onClick={() => setOpen(false)} to="/admin"
               className="block text-blue-700 font-semibold"
               >Admin</Link>
             )}

             {!user ? (
              <Link onClick={() => setOpen(false)} to="/login">Sing In</Link>
             ) : (
               <button onClick={logout}>Logout</button>
             )}

          </div>
        )}

       
      </div>
    </nav>
  );
};

export default Navbar;
