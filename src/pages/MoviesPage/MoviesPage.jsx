import { useEffect, useState } from "react";
import { searchMovie } from "../../components/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

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
    setSearchParams({ query: newMovie });
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <MovieList movies={movies} />
    </>
  );
}
