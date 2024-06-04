import { useEffect, useState } from "react";
import { detailMovie } from "../../components/movies-api";
import { useParams, Outlet, NavLink } from "react-router-dom";

export default function MoviesDetailPage() {
  const [movies, setMovies] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchDetailMovies = async () => {
      try {
        const detailMovies = await detailMovie(moviesId);
        setMovies(detailMovies);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDetailMovies();
  }, [moviesId]);

  const { original_title, overview, poster_path, tagline } = movies;

  return (
    <>
      <p>{original_title}</p>
      <p>{overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={tagline}
      />
      <ul>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
