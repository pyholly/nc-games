import { useState, useEffect } from "react";
import { fetchAllReviews } from "../../utils";

export const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllReviews().then(({ reviews }) => {
      setAllReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul id="review-card">
      {allReviews.map((review) => {
        return (
          <li key={review.review_id} className="list">
            <p>{review.title}</p>
            <img
              className="game-imgs"
              src={review.review_img_url}
              alt={review.title}
            />
            <p>Review owner: {review.owner}</p>
            <p>Votes: {review.votes}</p>
            <p>Comments: {review.comment_count}</p>
            <button className="btn">More Info</button>
          </li>
        );
      })}
    </ul>
  );
};
