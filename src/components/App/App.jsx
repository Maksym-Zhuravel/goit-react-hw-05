import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<div>Movies</div>}></Route>
        <Route path="*" element={<div>PAGE NOT FOUND</div>}></Route>
      </Routes>
    </>
  );
}
