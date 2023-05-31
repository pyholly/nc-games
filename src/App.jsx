import "./App.css";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Reviews } from "./Components/Reviews";
import { SingleReview } from "./Components/SingleReview";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </>
  );
}

export default App;
