import Layout from "../../components/admin2/Layout";

const AdminProperty = () =>{
  return(
    <div>
       <div className="  bg-white p-4 sm:p-6 rounded shadow w-full  mx-auto">
        <h2 className="text-2xl font-bold mb-6">All Properties</h2>

        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">Luxury Villa</td>
              <td className="p-3">$250,000</td>
              <td className="p-3 space-x-3">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        </div>
    </div>
  );
};

export default AdminProperty;