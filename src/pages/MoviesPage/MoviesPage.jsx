import { useEffect, useState } from "react";
import { searchMovie } from "../../components/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  // const page = searchParams.get("page");

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const searchMovies = await searchMovie(query, page);
        setMovies((prevMovies) => [...prevMovies, ...searchMovies]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSearchMovies();
  }, [query, page]);

  const handleSearch = async (newMovie) => {
    setSearchParams({ query: newMovie });
    setPage(1);
    setMovies([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <MovieList movies={movies} />
      {movies.length > 0 ? <LoadMoreBtn onClick={handleLoadMore} /> : undefined}
    </>
  );
}
