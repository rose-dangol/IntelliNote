import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fetchKnowledgeList } from "../../services/Knowledge";
import "./KnowledgeHub.css";

const KnowledgeHub = () => {
  const [knowledgeList, setKnowledgeList] = useState([]);

  useEffect(() => {
    const loadKnowledge = async () => {
      try {
        const data = await fetchKnowledgeList();
        setKnowledgeList(data);
      } catch (err) {
        console.error("Failed to load knowledge:", err);
      }
    };
    loadKnowledge();
  }, []);

  return (
    <div className="knowledge-container">
      <Sidebar isAdmin/>
      <div className="knowledge-main">
        <div className="knowledge-header">
          <h2>Knowledge Hub</h2>
        </div>

        <div className="knowledge-list">
          {knowledgeList.length > 0 ? (
            knowledgeList.map((item) => (
              <div key={item.id} className="knowledge-card">
                <h3>{item.title}</h3>
                <p className="knowledge-category">{item.category}</p>
                <p className="knowledge-content">{item.content}</p>
                <span className="knowledge-date">
                  {new Date(item.created_at).toLocaleDateString()}
                </span>
              </div>
            ))
          ) : (
            <p>No knowledge posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
