function SearchMovie() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        id="query"
        type="text"
        className="input"
        placeholder="i.e. Something in the Rain"
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}

export default SearchMovie;
