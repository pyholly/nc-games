import { useParams } from "react-router-dom";
import { ReviewInfo } from "./ReviewInfo";
import { Comments } from "./Comments";
import { useState, useEffect } from "react";

export const SingleReview = () => {
  const { review_id } = useParams();

  return (
    <>
      <ReviewInfo review_id={review_id} />
      <Comments review_id={review_id} />
    </>
  );
};
