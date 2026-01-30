import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

const Dashboard = () => {

  const {user} = useAuth();

  const [stats, setStats] = useState({
     totalProperties: 0,
     users: 0,
     sold: 0,
  });


  const fetchStats = async () => {
    try {
      const res = await api.get('/property/admin/stats', {
        headers: {
          Authorization: 'Bearer ${user.token}',
        },
      });

      setStats(res.data);

    } catch (error) {
       console.error("Dashboard stats error", error);
    }
  };

  useEffect( () => {
    if(user?.token){
      fetchStats();
    }
  }, [user]);


  return(
     <div>
       <h2 className="text-xl md:text-2xl font-bold mb-6">Overview</h2>

     <div className="">
       <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Properties</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalProperties}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Users</h3>
          <p className="text-3xl font-bold mt-2">{stats.users}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Sold</h3>
          <p className="text-3xl font-bold mt-2">{stats.sold}</p>
        </div>

      </div>
     </div>
     </div>
  );
};

export default Dashboard;