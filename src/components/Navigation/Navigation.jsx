import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul>
        <li className={css.item}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return clsx(css.link, isActive && css.active);
            }}
          >
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            to="/movies"
            className={({ isActive }) => {
              return clsx(css.link, isActive && css.active);
            }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
