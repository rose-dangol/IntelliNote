import Sidebar from "../../components/Sidebar/Sidebar";
import { Search, Lightbulb } from "lucide-react";
import "./SearchPage.css";

const SearchPage = () => {
  const searchResults = [
    {
      id: 1,
      title: "React useState Hook",
      content: "useState is a Hook that lets you add state to functional components...",
      category: "Development",
    },
    {
      id: 2,
      title: "JavaScript Array Methods",
      content: "Common array methods include map, filter, reduce, forEach...",
      category: "Development",
    },
    {
      id: 3,
      title: "CSS Flexbox Guide",
      content: "Flexbox is a layout module that makes it easier to design flexible responsive layouts...",
      category: "Design",
    },
  ];

  return (
    <div className="search-page">
      <Sidebar />
      <div className="search-page-content">
        <div className="search-page-inner">
       
          <div className="search-header">
            <span className="search-subtitle">Find any note instantly</span>
            <div className="search-bar-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search your notes..."
                className="searchPage-input"
              />
            </div>
          </div>


          {/* Best Answer */}
          <div className="best-answer-card">
            <div className="best-answer-inner">
              <div className="best-answer-icon">
                <Lightbulb className="lightbulb-icon" />
              </div>
              <div>
                <h3 className="best-answer-title">Best Match</h3>
                <p className="best-answer-text">
                  The useState hook is one of the most commonly used React hooks. It allows you to add
                  state to functional components. You can declare state variables and update them using
                  the setter function.
                </p>
                <span className="category-tag primary-tag">Development</span>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="search-results-section">
            <h2 className="results-heading">All Results ({searchResults.length})</h2>
            <div className="results-list">
              {searchResults.map((result) => (
                <div key={result.id} className="result-card">
                  <h3 className="result-title">{result.title}</h3>
                  <p className="result-content">{result.content}</p>
                  <span className="category-tag secondary-tag">{result.category}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchPage;
