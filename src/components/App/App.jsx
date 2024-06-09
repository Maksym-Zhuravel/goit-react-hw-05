import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import MovieReview from "../MovieReview/MovieReview";
import MovieCast from "../MovieCast/MovieCast";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesDetailPage = lazy(() =>
  import("../../pages/MoviesDetailPage/MoviesDetailPage")
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));

export default function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading page ...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MoviesDetailPage />}>
            <Route path="reviews" element={<MovieReview />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>
          <Route path="*" element={<div>PAGE NOT FOUND</div>} />
        </Routes>
      </Suspense>
    </>
  );
}
