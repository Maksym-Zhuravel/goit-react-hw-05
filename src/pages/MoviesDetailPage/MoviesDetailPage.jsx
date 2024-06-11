import { useEffect, useState, useRef } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { detailMovie } from "../../components/movies-api";
import css from "../MoviesDetailPage/MoviesDetailPage.module.css";
import {
  useParams,
  Outlet,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";

export default function MoviesDetailPage() {
  const [movies, setMovies] = useState([]);
  const { moviesId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

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
      <Link to={backLinkRef.current} className={css.link}>
        <MdKeyboardDoubleArrowLeft />
        Go back
      </Link>

      <p>
        <b>{original_title}</b>
      </p>
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
