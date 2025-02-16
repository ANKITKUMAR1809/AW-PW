const AdminDashboard = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Admin Dashboard</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Add New Content</h3>
        <textarea className="w-full p-2 rounded-md bg-gray-700 text-white mb-4" placeholder="Paste text here..."></textarea>
        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">Process & Save</button>
      </div>
      
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Manage Users</h3>
        <button className="bg-green-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-green-500 transition duration-300">Add User</button>
        <button className="bg-red-400 text-gray-900 px-4 py-2 rounded-lg ml-4 hover:bg-red-500 transition duration-300">Delete User</button>
      </div>
    </div>
  );
};

export default AdminDashboard;