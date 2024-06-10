export default function PreviousPageBtn({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Previous Page
    </button>
  );
}
