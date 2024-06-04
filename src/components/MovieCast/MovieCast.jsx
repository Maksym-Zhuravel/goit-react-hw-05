import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { castMovie } from "../movies-api";

export default function MovieCast() {
  const [movies, setMovies] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchCastMovies = async () => {
      try {
        const castMovies = await castMovie(moviesId);
        setMovies(castMovies);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCastMovies();
  }, [moviesId]);

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.profile_path}`}
              alt={movie.original_name}
            />
            <p>
              <b>{movie.original_name}</b>
            </p>
            <p>{movie.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
