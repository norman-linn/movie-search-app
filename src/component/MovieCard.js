function MovieCard(props) {
  const { movies } = props;

  const filteredMovieWithPosterPath = movies.filter(
    (movie) => movie.poster_path
  );

  const createMovieCard = filteredMovieWithPosterPath.map((movie) => (
    <div className="card" key={movie.id}>
      <img
        className="card-img"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`${movie.title} post`}
      />
      <div className="card-content">
        <h3 className="card-title">{movie.title}</h3>
        <p>
          <small>RELEASED DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card-description">{movie.overview}</p>
      </div>
    </div>
  ));

  return (
    <>
      <main className="card-container">{createMovieCard}</main>
    </>
  );
}

export default MovieCard;
