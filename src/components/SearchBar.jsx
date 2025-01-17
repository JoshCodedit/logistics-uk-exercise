import "../assets/styles/SearchBar.css";

export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name or registration..."
        value={searchQuery}
        onChange={onSearchChange}
        className="search-input"
      />
    </div>
  );
}
