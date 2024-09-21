import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import Cards from "./components/Cards";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
