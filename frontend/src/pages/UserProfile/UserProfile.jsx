import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { editProfile } from "../../services/Users";
import "./UserProfile.css";

const UserProfile = () => {
  const backendUrl = "http://localhost:8000";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("authToken");

  // Initialize form data with existing user data
  const [formData, setFormData] = useState({
    username: userData.username || "",
    email: userData.email || "",
    bio: userData.profile?.bio || "",
    avatar: null,
  });

  // For live avatar preview
  const [avatarPreview, setAvatarPreview] = useState(
    userData.profile?.avatar
      ? backendUrl + userData.profile.avatar
      : "/default-profile.png"
  );

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, avatar: file }));
      setAvatarPreview(URL.createObjectURL(file)); // live preview
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        dataToSend.append(key, formData[key]);
      }
    }

    try {
      const updatedUser = await editProfile(token, dataToSend);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="userProfile-container">
      <div className="profile-sidebar">
        <Sidebar />
      </div>
      <div className="userProfile-center">
        <div className="profile-card">
          <span className="profile-card-heading">User Profile</span>

          <div className="profile-info">
            <div className="profile-picture-section">
              <img
                src={avatarPreview}
                alt="Profile"
                className="profile-picture"
              />
              <div className="profile-data">
                <h2>{userData.username}</h2>
                <p>{userData.email}</p>
                <p className="bio">
                  {userData.profile?.bio || "User has not set a bio yet!"}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar">Profile Picture</label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
              />
            </div>

            <button type="submit" className="save-button">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
