import { useState, useEffect } from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Reviews } from "./Components/Reviews";
import { fetchAllReviews } from "../utils";

function App() {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetchAllReviews().then(({ reviews }) => {
      setAllReviews(reviews);
    });
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home allReviews={allReviews} />} />
        <Route path="/reviews" element={<Reviews allReviews={allReviews} />} />
      </Routes>
    </>
  );
}

export default App;
