function SearchMovie(props) {
  const { query, generateMovies, handleChange } = props;

  return (
    <form className="form" onSubmit={(e) => generateMovies(e)}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        name="query"
        type="text"
        className="input"
        placeholder="i.e. Something in the Rain"
        value={query}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}

export default SearchMovie;
