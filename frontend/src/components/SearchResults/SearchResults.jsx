function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return <span className="no-result">No results yet. Try searching for something!</span>;
  }
  return (
    <div>
      {results.map((item, index) => (
        <div key={index} className="result-card">
          <h3 className="result-title">
            <a href={item.link}>
              {item.title || "Untitled"}
            </a>
          </h3>
          <p className="result-content">{item.snippet}</p>
          <span className="category-tag secondary-tag">Web Result</span>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
