import css from "../NextPageBtn/NextPageBtn.module.css";
import clsx from "clsx";

export default function NextPageBtn({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(disabled === true ? css.disabled : css.button)}
    >
      Next Page
    </button>
  );
}
