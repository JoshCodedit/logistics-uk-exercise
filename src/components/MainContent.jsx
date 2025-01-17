import DriverListing from "./DriverListing";
import SearchBar from "./SearchBar";
import "../assets/styles/MainContent.css";
import { useState } from "react";

export default function MainContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="main-content">
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearch} />
      <DriverListing searchQuery={searchQuery} />
    </div>
  );
}
