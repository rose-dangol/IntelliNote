const base_url = "http://localhost:8000/knowledge/";

export const fetchKnowledgeList = async () => {
  try {
    const response = await fetch(base_url);
    if (!response.ok) throw new Error("Failed to fetch knowledge list");
    return await response.json();
  } catch (error) {
    console.error("Error fetching knowledge:", error);
    throw error;
  }
};