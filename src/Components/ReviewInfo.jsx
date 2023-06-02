import { useState, useEffect } from "react";
import { fetchSingleReview, updateVotes } from "../../utils";

export const ReviewInfo = ({ review_id }) => {
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(null);
  const [err, setErr] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchSingleReview(review_id).then(({ review }) => {
      setSingleReview(review[0]);
      setVoteCount(review[0].votes);
      setIsLoading(false);
    });
  }, []);

  function handleClick() {
    if (!clicked) {
      setVoteCount((currVotes) => currVotes + 1);
      setErr(false);
      setClicked(true);
    } else {
      setVoteCount((currVotes) => currVotes - 1);
      setClicked(false);
    }
    updateVotes(review_id, clicked).catch((err) => {
      setClicked(false);
      setVoteCount((currVotes) => {
        currVotes - 1;
      });

      setErr(true);
    });
  }

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
      <button className="btn upvote-btn" onClick={handleClick}>
        {clicked ? (
          <span className="heart-emoji red-heart">&hearts;</span>
        ) : (
          <span className="heart-emoji white-heart">&hearts;</span>
        )}
        {voteCount}
      </button>
      {err ? (
        <p className="err-message">
          Oops something went wrong. Please refresh and try again!
        </p>
      ) : null}
      <p className="category"> Category: {singleReview.category}</p>
    </section>
  );
};
