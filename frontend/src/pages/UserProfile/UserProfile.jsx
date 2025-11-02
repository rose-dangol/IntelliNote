import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";

import './UserProfile.css';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        username: 'Rose',
        email: 'rose@gmail.com',
        bio: 'I love taking notes and staying organized!',
        profilePicture: '/images/pfp.jpg'
    });

    const [formData, setFormData] = useState({ ...userData });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    profilePicture: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(formData);
    };

    return (
        <div className="userProfile-container">
            <div className="profile-sidebar">
                <Sidebar/>
            </div>
            <div className="userProfile-center">
                <div className="profile-card">
                    <span className='profile-card-heading'>User Profile</span>
                    
                    <div className="profile-info">
                        <div className="profile-picture-section">
                            <img 
                                src={userData.profilePicture} 
                                alt="Profile" 
                                className="profile-picture"
                            />
                            <div className="profile-data">
                                <h2>{userData.username}</h2>
                                <p>{userData.email}</p>
                                <p className="bio">{userData.bio}</p>
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
                            <label htmlFor="profilePicture">Profile Picture</label>
                            <input
                                type="file"
                                id="profilePicture"
                                name="profilePicture"
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
