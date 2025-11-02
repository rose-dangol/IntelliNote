import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import NoteCard from "../../components/NoteCard/NoteCard";
import "./SavedNotes.css";

const SavedNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Best Practices",
      content:
        "Always use functional components with hooks. Keep components small and focused. Use proper naming conventions.",
      category: "Development",
    },
    {
      id: 2,
      title: "Meeting Notes - Q1 Planning",
      content:
        "Discussed upcoming features for the next quarter. Focus on user experience improvements and performance optimization.",
      category: "Work",
    },
    {
      id: 3,
      title: "Book Ideas",
      content:
        "A collection of book ideas to explore: Clean Code by Robert Martin, Designing Data-Intensive Applications, The Pragmatic Programmer.",
      category: "Personal",
    },
    {
      id: 4,
      title: "CSS Animation Tips",
      content:
        "Use transform and opacity for smooth animations. Avoid animating width/height. Use will-change sparingly.",
      category: "Design",
    },
  ]);

  const handleEdit = (id, newTitle, newContent) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title: newTitle, content: newContent } : note)));
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="saved-notes-page">
      <Sidebar />
      <div className="saved-notes-content">
        <div className="saved-notes-inner">
          {/* Header */}
          <div className="saved-notes-header">
            <span className="saved-notes-title">Saved Notes</span>
            <span className="saved-notes-subtitle">
              {notes.length} {notes.length === 1 ? "note" : "notes"} saved
            </span>
          </div>

          {/* Notes Grid */}
          {notes.length > 0 ? (
            <div className="notes-grid">
              {notes.map((note) => (
                <NoteCard key={note.id} note={note} onEdit={handleEdit} onDelete={handleDelete} />
              ))}
            </div>
          ) : (
            <div className="no-notes">
              <p>No notes yet. Start creating some!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedNotes;
