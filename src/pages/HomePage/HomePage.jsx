import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { trendingMovies } from "../../components/movies-api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingMovie = await trendingMovies();
        console.log(trendingMovie);
        setMovies(trendingMovie);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
