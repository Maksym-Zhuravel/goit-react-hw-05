import { useEffect, useState } from "react";
import { reviewMovie } from "../movies-api";
import { useParams } from "react-router-dom";

export default function MovieReview() {
  const [movies, setMovies] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchReviewMovie = async () => {
      try {
        const reviewMovies = await reviewMovie(moviesId);
        setMovies(reviewMovies);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviewMovie();
  }, [moviesId]);

  // const { author, content, created_at } = movies;

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>
              <b>{movie.author}</b>
            </p>
            <p>{movie.content}</p>
            <p>{movie.created_at}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
