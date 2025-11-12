import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Search,Lightbulb } from "lucide-react";
import "./SearchPage.css";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [bestAnswer, setBestAnswer] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/web/search/?q=${query}`
      );
      const data = await response.json();
      setResults(data.results || []);
      setBestAnswer(data.summary || "No summary available.");
    } catch (error) {
      console.error("Error fetching search results:", error);
      setBestAnswer("Something went wrong while searching.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <Sidebar />
      <div className="search-page-content">
        <div className="search-page-inner">
          {/* HEADER */}
          <div className="search-header">
            <span className="search-subtitle">Find any note instantly</span>
            <div className="search-bar-wrapper">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="searchPage-input"
                  placeholder="Search Anything.."
                />
                <button className="search-button"onClick={handleSearch} disabled={loading}>
                  {loading ? "..." : <Search />}
                </button>
            </div>
          </div>

          {/* BEST ANSWER */}
          {bestAnswer && (
            <div className="best-answer-card">
              <div className="best-answer-inner">
                <div className="best-answer-icon">
                  <Lightbulb className="lightbulb-icon" />
                </div>
                <div>
                  <h3 className="best-answer-title">Best Match</h3>
                  <p className="best-answer-text">{bestAnswer}</p>
                  <span className="category-tag primary-tag">Summary</span>
                </div>
              </div>
            </div>
          )}

          {/* SEARCH RESULTS */}
          <div className="search-results-section">
            <h2 className="results-heading">All Results ({results.length})</h2>
            <div className="results-list">
              <SearchResults results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
