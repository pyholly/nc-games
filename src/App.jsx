import "./App.css";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Reviews } from "./Components/Reviews";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;
