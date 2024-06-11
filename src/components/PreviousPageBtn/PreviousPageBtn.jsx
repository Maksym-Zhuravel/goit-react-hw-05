import css from "../PreviousPageBtn/PreviousPageBtn.module.css";
import clsx from "clsx";

export default function PreviousPageBtn({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(disabled === true ? css.disabled : css.button)}
    >
      Previous Page
    </button>
  );
}

// return clsx(css.link, isActive && css.active)
