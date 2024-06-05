import { useEffect, useState } from "react";
import { searchMovie } from "../../components/movies-api";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const searchMovies = await searchMovie("");
        setMovies(searchMovies);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSearchMovies();
  }, []);

  return <MovieList movies={movies} />;
}
