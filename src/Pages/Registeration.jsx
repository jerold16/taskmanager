import React, { useState, useEffect } from "react";
import axios from "axios";
import { hostName } from "../App";

const Registration = () => {
  // State variables to store form data and dropdown options
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    position: "",
    profile_pic: null, // Changed to null to indicate no file selected
  });

  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);
  const [imagePreview, setImagePreview] = useState("");

  // Fetch departments and positions from backend on component mount
  useEffect(() => {
    fetchDepartments();
    fetchPositions();
  }, []);

  // Function to fetch departments from backend
  const fetchDepartments = () => {
    axios
      .get("http://192.168.0.106:8000/api/DisplayDepartments/")
      .then((response) => {
        setDepartments(response.data.Departments);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
      });
  };

  // Function to fetch positions from backend
  const fetchPositions = () => {
    axios
      .get("http://192.168.0.106:8000/api/DisplayDepartments/")
      .then((response) => {
        setPositions(response.data.Positions);
      })
      .catch((error) => {
        console.error("Error fetching positions:", error);
      });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("department", formData.department);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("profile_pic", formData.profile_pic);

    axios
      .post(
        `${hostName}/api/EmployeeRegistration/`,
        formDataToSend
      )
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        // Optionally, you can reset the form fields here
        setFormData({
          name: "",
          email: "",
          password: "",
          department: "",
          position: "",
          profile_pic: null, // Reset to null
        });
        setImagePreview("");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle file input change and generate image preview
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profile_pic: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  return (
    <div className="min-h-[100vh]  flex">
      <div className="shadow col-md-7 col-lg-6 col-xl-5 p-3 poppins rounded  m-auto">
        <img className="mx-auto my-3" width={150} src={require('../Assests/meridawebsitelogo.png')} alt="Company logo" />
        <h2 className="text-center">Employee Registration Form</h2>
        <form className="flex flex-wrap gap-3 " encType="multipart/form-data">
          <div>
            <label htmlFor="name">Name:</label>
            <input
            className="my-2 block outline-none rounded p-2 border-slate-400 border-1"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
             className="my-2 block outline-none rounded p-2 border-slate-400 border-1"
              
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
             className="my-2 block outline-none rounded p-2 border-slate-400 border-1"
              
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <select
             className="my-2 block outline-none rounded p-2 border-slate-400 border-1"
              
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.department_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="position">Position:</label>
            <select
             className="my-2 block outline-none rounded p-2 border-slate-400 border-1"
              
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
            >
              <option value="">Select Position</option>
              {positions.map((pos) => (
                <option key={pos.id} value={pos.id}>
                  {pos.position}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="profile_pic">Profile Picture:</label>
            <input
             className="my-2 block outline-none rounded p-2 border-slate-400 border-1"
              
              type="file"
              id="profile_pic"
              name="profile_pic"
              onChange={handleFileInputChange}
            />
          </div>
          {imagePreview && (
            <div>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            </div>
          )}
         </form>
         <button onClick={handleSubmit} className="mx-auto mt-3 block w-filt p-2 px-3 bg-green-500 text-white rounded" 
         >Submit</button>
        
      </div>
    </div>
  );
};

export default Registration;
