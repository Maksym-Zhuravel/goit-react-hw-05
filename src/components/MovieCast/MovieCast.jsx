import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { castMovie } from "../movies-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieCast() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchCastMovies = async () => {
      try {
        setError(false);
        const castMovies = await castMovie(moviesId);
        setMovies(castMovies);
      } catch (err) {
        setError(true);
        setMovies([]);
      }
    };

    fetchCastMovies();
  }, [moviesId]);

  return (
    <>
      <ul>
        {error && <ErrorMessage />}
        {movies.map(({ id, profile_path, original_name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={original_name}
            />
            <p>
              <b>{original_name}</b>
            </p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
