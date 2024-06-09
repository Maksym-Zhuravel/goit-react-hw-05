import { Link, useLocation } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={location} className={css.link}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
