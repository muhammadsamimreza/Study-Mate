import React, { use } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../Provider/AuthContext";
import { FaTrash, FaEdit } from "react-icons/fa";

const MyConnections = () => {
  const { user } = use(AuthContext);
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ subject: "", studyMode: "" });

  useEffect(() => {
    if (user?.email) {
      const fetchConnections = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            `http://localhost:3000/requests?senderEmail=${user.email}`
          );
          setConnections(res.data);
        } catch (error) {
          console.error("Error fetching connections:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchConnections();
    }
  }, [user?.email]);


  // Delete Request
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This request will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14b8a6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#f9fafb",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/requests/${id}`);
          setConnections(connections.filter((conn) => conn._id !== id));
          Swal.fire("Deleted!", "Your request has been removed.", "success");
        } catch (err) {
          console.error(err);
          Swal.fire("Error!", "Failed to delete request.", "error");
        }
      }
    });
  };

  //  Update Request
  const handleEdit = (connection) => {
    setEditingId(connection._id);
    setFormData({
      subject: connection.subject,
      studyMode: connection.studyMode,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3000/requests/${editingId}`,
        formData
      );
      if (res.status === 200) {
        Swal.fire({
          title: "Updated!",
          text: "Request information has been updated.",
          icon: "success",
          confirmButtonColor: "#14b8a6",
        });
        setConnections((prev) =>
          prev.map((singleData) =>
            singleData._id === editingId
              ? {
                  ...singleData,
                  subject: formData.subject,
                  studyMode: formData.studyMode,
                }
              : singleData
          )
        );
        setEditingId(null);
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error!");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh] text-lg text-teal-600 font-semibold">
        Loading your connections...
      </div>
    );

  if (connections.length === 0)
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-500 text-lg">
        No connections found.
      </div>
    );

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-teal-50 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Connections
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Partner</th>
                <th className="py-3 px-4 text-left">Subject</th>
                <th className="py-3 px-4 text-left">Study Mode</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((conn) => (
                <tr
                  key={conn._id}
                  className="border-b hover:bg-teal-50 transition-colors"
                >
                  <td className="py-3 px-4 flex items-center space-x-3">
                    <img
                      src={conn.profileimage}
                      alt={conn.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      {conn.name}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{conn.subject}</td>
                  <td className="py-3 px-4 text-gray-700">{conn.studyMode}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleEdit(conn)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg mr-2 transition-all"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(conn._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-all"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Update Modal */}
        {editingId && (
          <div className="fixed inset-0 bg-black/70 bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-96">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Update Request
              </h3>
              <form onSubmit={handleUpdate} className="space-y-3">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    Study Mode
                  </label>
                  <input
                    type="text"
                    name="studyMode"
                    value={formData.studyMode}
                    onChange={(e) =>
                      setFormData({ ...formData, studyMode: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyConnections;
