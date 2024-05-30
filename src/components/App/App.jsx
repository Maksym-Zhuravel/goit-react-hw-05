import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/movies" element={<div>Movies</div>}></Route>
        <Route path="*" element={<div>PAGE NOT FOUND</div>}></Route>
      </Routes>
    </>
  );
}
