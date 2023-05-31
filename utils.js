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
