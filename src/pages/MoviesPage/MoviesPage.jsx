import { useEffect, useState } from "react";
import { searchMovie } from "../../components/movies-api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import NextPageBtn from "../../components/NextPageBtn/NextPageBtn";
import PreviousPageBtn from "../../components/PreviousPageBtn/PreviousPageBtn";
import Loader from "../../components/Loader/Loader";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setLoading(true);
        setMovies([]);
        const searchMovies = await searchMovie(query, page);
        setMovies(searchMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchMovies();
  }, [query, page]);

  const handleSearch = async (newMovie) => {
    setSearchParams({ query: newMovie, page: "1" });
    setMovies([]);
  };

  const handleNextPage = async () => {
    const nextPage = parseInt(page) + 1;
    setSearchParams({
      query: searchParams.get("query"),
      page: nextPage,
    });
  };

  const handlePreviousPage = async () => {
    const previousPage = parseInt(page) - 1;
    setSearchParams({
      query: searchParams.get("query"),
      page: previousPage,
    });
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {loading && <Loader />}
      <MovieList movies={movies} />
      {movies.length > 0 ? (
        <PreviousPageBtn onClick={handlePreviousPage} disabled={page < 2} />
      ) : undefined}
      {movies.length > 0 ? (
        <NextPageBtn onClick={handleNextPage} disabled={movies.length < 20} />
      ) : undefined}
    </>
  );
}
