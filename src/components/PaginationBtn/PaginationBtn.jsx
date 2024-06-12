import css from "./PaginationBtn.module.css";
import clsx from "clsx";

export default function PaginationBtn({ children, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(disabled === true ? css.disabled : css.button)}
    >
      {children}
    </button>
  );
}
