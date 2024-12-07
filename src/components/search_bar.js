const SearchBar = () => {
  return (
    <div className="search-container">
      <form action="#" method="get" className="search-form">
        <input
          type="text"
          id="search-bar"
          name="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <button type="submit" aria-label="Search">
        <img
          src="../images/logos_and_icons/search_icon.png"
          width="30px"
          alt="Search"
        />
      </button>
    </div>
  );
};

export default SearchBar;
