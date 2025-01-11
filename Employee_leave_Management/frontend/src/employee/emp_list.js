import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./emp_list.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Emp_list() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/View")
      .then((resp) => {
        console.log(resp.data);
        setEmployee(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredEmployees = employee.filter((emp) => emp.role !== "Admin");

  // Function to format the date to dd/mm/yyyy hh:mm:ss
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return date.toLocaleString("en-GB", options); // 'en-GB' gives dd/mm/yyyy format
  };

  // Handle delete
  const DeleteEmp = async (empId) => {
    try {
      // Send DELETE request with the employee ID in the URL
      const response = await axios.delete(
        `http://localhost:5000/delete/${empId}`
      );

      if (response.data.message === "Employee deleted successfully") {
        // Remove the deleted employee from the state
        setEmployee((prevEmployees) =>
          prevEmployees.filter((emp) => emp.id !== empId)
        );

        // Show success toast
        toast.success("Employee deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Failed to delete employee");
    }
  };

  return (
    <div className="container3 justify-content-center align-items-center">
      <div className="text-center text-dark">
        <h2 className="mb-4">Employee List</h2>
      </div>
      <div className="table-responsive shadow-lg rounded overflow-hidden">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Date Of Birth</th>
              <th>Salary</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td> {/* Index starts from 1 */}
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.department}</td>
                <td>{formatDate(data.date_of_birth)}</td>
                <td>{data.salary}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    {/* Delete button */}
                    <button
                      className="btn text-align-center btn-danger"
                      onClick={() => DeleteEmp(data.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Emp_list;
