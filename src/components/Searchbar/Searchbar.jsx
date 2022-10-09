export const Searchbar = ({ onSubmit }) => (
  <header className="searchbar">
    <form className="searchForm" onSubmit={onSubmit}>
      <button type="submit" className="button">
        <span className="searchForm-button-label">Search</span>
      </button>

      <input
        className="searchForm-input"
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
