import "./searchbar.css";
import { useNotes } from "../../context";
import { useState } from "react";

const Searchbar = () => {
  const { noteState, noteDispatch } = useNotes();
  const [searchInput, setSearchInput] = useState(noteState.search);

  const handleSearch = () => {
    noteDispatch({
      type: "SEARCH_BY_TITLE_DESCRIPTION",
      payload: searchInput,
    });
  };

  return (
    <div className="search-box">
      <input
        autoComplete="none"
        name="hidden"
        className="txt-input txt-md search-input"
        type="text"
        placeholder="Seach by title..."
        id="search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
      <button className="search-btn" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export { Searchbar };
