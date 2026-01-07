
const Dashboard = () => {
  return(
     <div>
       <h2 className="text-xl md:text-2xl font-bold mb-6">Overview</h2>

     <div className="">
       <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Properties</h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Users</h3>
          <p className="text-3xl font-bold mt-2">540</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Sold</h3>
          <p className="text-3xl font-bold mt-2">85</p>
        </div>

      </div>
     </div>
     </div>
  );
};

export default Dashboard;