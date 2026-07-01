// // ProfileSettings.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiArrowLeft } from "react-icons/fi";
// import "../styles/profile.css";

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     firstName: "John",
//     lastName: "Doe",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log(formData);
//   };

//   return (
//     <div className="profile-settings">

//       <div className="profile-header">
//         <button
//           className="back-button"
//           onClick={() => navigate(-1)}
//         >
//           <FiArrowLeft />
//         </button>

//         <div>
//           <h1>Profile</h1>
//           <p>Update your personal information.</p>
//         </div>
//       </div>

//       <div className="settings-card">

//         <div className="input-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="Enter first name"
//           />
//         </div>

//         <div className="input-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Enter last name"
//           />
//         </div>

//         <div className="button-group">
//           <button className="cancel-btn">
//             Cancel
//           </button>

//           <button
//             className="save-btn"
//             onClick={handleSubmit}
//           >
//             Save Changes
//           </button>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default Profile;

// ProfileSettings.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import "../styles/profile.css";

const API_URL = process.env.REACT_APP_API_URL;

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [initialData, setInitialData] = useState({
    firstName: "",
    lastName: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getProfile();
  }, []);

  // =========================
  // FETCH PROFILE
  // =========================
  const getProfile = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/api/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const user = res.data.user;

      const profileData = {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
      };

      setFormData(profileData);
      setInitialData(profileData);

    } catch (err) {
      console.log(
        err.response?.data?.message || err.message
      );

      if (
        err.response?.status === 401 ||
        err.response?.status === 403
      ) {
        localStorage.removeItem("token");
        navigate("/login");
      }

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // UPDATE PROFILE
  // =========================
  const handleSubmit = async () => {
    try {
      setSaving(true);

      const res = await axios.put(
        `${API_URL}/api/auth/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        res.data.message ||
        "Profile updated successfully"
      );

      setInitialData(formData);

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Failed to update profile"
      );

    } finally {
      setSaving(false);
    }
  };

  // =========================
  // RESET CHANGES
  // =========================
  const handleCancel = () => {
    setFormData(initialData);
  };

  if (loading) {
    return (
      <div className="profile-settings">
        <div className="settings-card">
          Loading profile...
        </div>
      </div>
    );
  }

  return (
    <div className="profile-settings">

      {/* Header */}
      <div className="profile-header">

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft />
        </button>

        <div>
          <h1>Profile</h1>
          <p>Update your personal information.</p>
        </div>

      </div>

      {/* Card */}
      <div className="settings-card">

        <div className="input-group">
          <label>First Name</label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </div>

        <div className="button-group">

          <button
            className="cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSubmit}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;
