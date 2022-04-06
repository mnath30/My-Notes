import "./searchbar.css";
const Searchbar = () => {
  return (
    <div className="search-box">
      <input
        className="txt-input txt-md search-input"
        type="text"
        placeholder="Seach by title..."
        id="search"
      ></input>
      <button className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export { Searchbar };
