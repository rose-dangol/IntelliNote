import { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Camera, Save, Shield } from "lucide-react";
import "./AdminProfile.css";

const AdminProfile = () => {
  const [formData, setFormData] = useState({
    username: "admin",
    email: "admin@intellinote.com",
    bio: "System administrator for IntelliNote. Managing users and content.",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="admin-profile-container">
      <Sidebar isAdmin />
      <div className="admin-profile-content">
        <div className="admin-profile-wrapper">

          <div className="admin-profile-header">
            <span className="admin-profile-title">Admin Profile</span>
            <span className="admin-profile-subtext">Manage your admin account</span>
          </div>

          <div className="profile-body">
            <div className="admin-detail-section">
                  <div className="admin-icon">
                    <Shield size={48} />
                  </div>
                <div className="admin-info">
                  <div className="admin-name">
                    <h3>Administrator</h3>
                    <span className="admin-badge">ADMIN</span>
                  </div>
                  <span>Admin since January 2024</span>
                </div>
              </div>
              
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    rows={4}
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="save-btn">
                  <Save size={18} />
                  Save Changes
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
