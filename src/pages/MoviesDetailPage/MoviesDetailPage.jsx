import { useEffect, useState } from "react";
import { detailMovie } from "../../components/movies-api";

export default function MoviesDetailPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDetailMovies = async () => {
      try {
        const detailMovies = await detailMovie(2);
        console.log(detailMovies);
        setMovies(detailMovies);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDetailMovies();
  }, []);

  return (
    <>
      <p>{movies.original_title}</p>
      <p>{movies.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        alt={movies.tagline}
      />
    </>
  );
}
