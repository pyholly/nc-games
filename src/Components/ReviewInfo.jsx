import { useState, useEffect } from "react";
import { fetchSingleReview } from "../../utils";

export const ReviewInfo = ({ review_id }) => {
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSingleReview(review_id).then(({ review }) => {
      setSingleReview(review[0]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  return (
    <section id="review-info">
      <h2>{singleReview.title}</h2>
      <p>Game Master: {singleReview.designer}</p>
      <img
        className="img"
        src={singleReview.review_img_url}
        alt={singleReview.title}
      />
      <p className="review-body">{singleReview.review_body}</p>
      <p>Created by {singleReview.owner}</p>
      <button className="btn">
        <span className="heart-emoji">&hearts;</span> {singleReview.votes}
      </button>
      <p className="category"> Category: {singleReview.category}</p>
    </section>
  );
};
