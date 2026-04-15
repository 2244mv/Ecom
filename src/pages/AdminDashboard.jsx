import { useEffect, useState } from "react";
import { apiService } from "../hooks/apiService";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const data = await apiService.get("/api/v1/users");
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900">
      
      <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">
        Admin Dashboard
      </h1>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-lg dark:text-white">Loading users...</p>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {/* TABLE */}
      {!loading && users.length > 0 && (
        <div className="overflow-x-auto max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow">
          <table className="w-full text-left">
            
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email || "N/A"}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

      {/* EMPTY */}
      {!loading && users.length === 0 && (
        <h2 className="text-center text-xl dark:text-white">
          No Users Found
        </h2>
      )}
    </div>
  );
};

export default AdminDashboard;