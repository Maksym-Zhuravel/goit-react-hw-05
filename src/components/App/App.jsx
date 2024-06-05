import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesDetailPage from "../../pages/MoviesDetailPage/MoviesDetailPage";
import MovieReview from "../MovieReview/MovieReview";
import MovieCast from "../MovieCast/MovieCast";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MoviesDetailPage />}>
          <Route path="reviews" element={<MovieReview />} />
          <Route path="cast" element={<MovieCast />} />
        </Route>
        <Route path="*" element={<div>PAGE NOT FOUND</div>} />
      </Routes>
    </>
  );
}
