import { useParams } from "react-router-dom";
import { ReviewInfo } from "./ReviewInfo";

export const SingleReview = () => {
  const { review_id } = useParams();

  return (
    <>
      <ReviewInfo review_id={review_id} />
    </>
  );
};
