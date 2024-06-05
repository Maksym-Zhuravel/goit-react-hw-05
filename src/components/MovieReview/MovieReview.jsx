import { useEffect, useState } from "react";
import { reviewMovie } from "../movies-api";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieReview() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchReviewMovie = async () => {
      try {
        setError(false);
        const reviewMovies = await reviewMovie(moviesId);
        setMovies(reviewMovies);
      } catch (err) {
        setError(true);
        setMovies([]);
      }
    };
    fetchReviewMovie();
  }, [moviesId]);

  return (
    <>
      <ul>
        {error && <ErrorMessage />}
        {movies.length > 0 ? (
          movies.map(({ id, author, content, created_at }) => (
            <li key={id}>
              <p>
                <b>{author}</b>
              </p>
              <p>{content}</p>
              <p>{created_at}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </ul>
    </>
  );
}
