import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { trendingMovies } from "../../components/movies-api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingMovie = await trendingMovies();
        setMovies(trendingMovie);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
}
