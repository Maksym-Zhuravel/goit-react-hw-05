import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { trendingMovies } from "../../components/movies-api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        setMovies([]);
        const trendingMovie = await trendingMovies();
        setMovies(trendingMovie);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <MovieList movies={movies} />
    </>
  );
}
