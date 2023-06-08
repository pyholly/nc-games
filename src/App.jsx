import "./App.css";
import { useState } from "react";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Reviews } from "./Components/Reviews";
import { SingleReview } from "./Components/SingleReview";
import { UserContext } from "./user";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({
    username: "jessjelly",
    loggedIn: true,
  });

  return (
    <>
      <UserContext.Provider value={userLoggedIn}>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
