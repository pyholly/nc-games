import axios from "axios";

const instance = axios.create({
  baseURL: "https://hollys-nc-games.onrender.com/api",
});

export const fetchAllReviews = () => {
  return instance.get("/reviews").then(({ data }) => {
    return data;
  });
};

export const fetchSingleReview = (review_id) => {
  return instance.get(`/reviews/${review_id}`).then(({ data }) => {
    return data;
  });
};

export const fetchComments = (review_id) => {
  return instance.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const updateVotes = (review_id, clicked) => {
  const votes = { inc_votes: 0 };
  if (!clicked) {
    votes.inc_votes = 1;
  } else {
    votes.inc_votes = -1;
  }
  return instance.patch(`/reviews/${review_id}`, votes);
};
