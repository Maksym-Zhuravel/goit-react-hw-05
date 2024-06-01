export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.original_title}</li>
      ))}
    </ul>
  );
}
