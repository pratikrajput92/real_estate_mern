import { Link } from "react-router-dom";

const Signup = () => {
  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
       <div className=" w-full max-w-md bg-white shadow-xl rounded-2xl p-8 ">
         <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

         <input type="text"
          placeholder="Full Name" 
          className="w-full border p-3 rounded mb-4"/>

          <input type="email"
           placeholder="Email" 
           className="w-full border p-3 rounded mb-4"/>
          
          <input type="password"
           placeholder="Password" 
           className="w-full border p-3 rounded mb-4"/>

           <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800">Sign Up</button>

           <p className="text-center mt-4 text-gray-600">Already have an Account?{""}
            <Link to={"/login"} className="text-blue-700">Login</Link>
           </p>
          </div>

    </div>
  );
};

export default Signup;