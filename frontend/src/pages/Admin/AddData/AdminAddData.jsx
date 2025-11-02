import { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { PlusCircle } from "lucide-react";
import NoteCard from "../../../components/NoteCard/NoteCard";
import "./AdminAddData.css";

const AdminAddData = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [addedData, setAddedData] = useState([
    {
      id: 1,
      title: "React Documentation",
      content: "Official React documentation and guides for building user interfaces.",
      category: "Development",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.content && formData.category) {
      setAddedData([
        ...addedData,
        {
          id: addedData.length + 1,
          ...formData,
        },
      ]);
      setFormData({ title: "", content: "", category: "" });
    }
  };

  return (
    <div className="admin-add-container">
      <Sidebar isAdmin />
      <div className="admin-add-main">
        <div className="admin-add-content">
          {/* Header */}
          <header className="admin-add-header">
            <h1 className="admin-add-title">Add Data</h1>
            <p className="admin-add-subtitle">Create new notes and content</p>
          </header>

          <div className="admin-add-grid">
            {/* Add Form */}
            <div className="admin-form">
              <h2 className="admin-form-title">Create New Note</h2>
              <form onSubmit={handleSubmit} className="admin-form-fields">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter note title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={6}
                    placeholder="Enter note content"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Development, Personal, Work"
                    required
                  />
                </div>

                <button type="submit" className="add-btn">
                  <PlusCircle size={18} />
                  Add Note
                </button>
              </form>
            </div>

            {/* Added Data Preview */}
            <div className="admin-preview">
              <h2 className="admin-preview-title">
                Recently Added ({addedData.length})
              </h2>
              <div className="admin-preview-list">
                {addedData.map((note) => (
                  <NoteCard key={note.id} note={note} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddData;
