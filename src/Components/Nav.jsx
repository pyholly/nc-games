import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/" className="text">
        Home
      </Link>
      {" | "}
      <Link to="/reviews" className="text">
        Reviews
      </Link>
    </nav>
  );
};
