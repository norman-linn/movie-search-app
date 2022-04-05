import { useState } from "react";
import SearchMovie from "./component/SearchMovie";
import MovieCard from "./component/MovieCard";
import "./App.css";

function App() {
  // states for query & movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // onchange event for search movie
  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  // fetchData from API when submit
  const generateMovies = async (e) => {
    e.preventDefault();

    if (query.length === 0) return e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=685396731dac9aa3af8f20f4a728bd67&language=en-US&query=${query}&include_adult=false`;
    try {
      const response = await fetch(url);
      const movieData = await response.json();
      setMovies(movieData.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <main className="App">
      <h1 className="title">Movie Search With React JS</h1>
      <SearchMovie
        query={query}
        generateMovies={generateMovies}
        handleChange={handleChange}
      />
      <MovieCard movies={movies} />
    </main>
  );
}

export default App;
