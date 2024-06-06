import { useEffect, useState } from "react";
import { searchMovie } from "../../components/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const searchMovies = await searchMovie(query);
        setMovies(searchMovies);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSearchMovies();
  }, [query]);

  const handleSearch = async (newMovie) => {
    setQuery(newMovie);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <MovieList movies={movies} />
    </>
  );
}
