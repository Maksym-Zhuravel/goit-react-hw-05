import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesDetailPage from "../../pages/MoviesDetailPage/MoviesDetailPage";
import MovieCast from "../MovieCast/MovieCast";
import MovieReview from "../MovieReview/MovieReview";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<div>Movies</div>}>
          <Route path="cast" element={<MovieReview />}></Route>
          <Route path="reviews" element={<MovieCast />}></Route>
        </Route>
        <Route path="/movies/:moviesId" element={<MoviesDetailPage />}></Route>
        <Route path="*" element={<div>PAGE NOT FOUND</div>}></Route>
      </Routes>
    </>
  );
}
