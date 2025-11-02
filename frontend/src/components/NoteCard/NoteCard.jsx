import { useState } from "react";
import { Edit2, Trash2, Save } from "lucide-react";
import "./NoteCard.css";

const NoteCard = ({ note, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const handleSave = () => {
    if (onEdit) {
      onEdit(note.id, editTitle, editContent);
    }
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <div className="note-edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="note-edit-input"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={4}
            className="note-edit-textarea"
          />
          <div className="note-edit-actions">
            <button onClick={handleSave} className="note-save-button">
              <Save className="icon-small" />
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="note-cancel-button">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="note-header">
            <h3 className="note-title">{note.title}</h3>
            <div className="note-buttons">
              {onEdit && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="note-edit-button"
                  title="Edit"
                >
                  <Edit2 className="icon-small" />
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(note.id)}
                  className="note-delete-button"
                  title="Delete"
                >
                  <Trash2 className="icon-small" />
                </button>
              )}
            </div>
          </div>
          <p className="note-content">{note.content}</p>
          <span className="note-category">{note.category}</span>
        </>
      )}
    </div>
  );
};

export default NoteCard;
