export default function NextPageBtn({ onClick, disabled }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      Next Page
    </button>
  );
}
