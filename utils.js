import axios from "axios";

const instance = axios.create({
  baseURL: "https://hollys-nc-games.onrender.com/api",
});

export const fetchAllReviews = () => {
  return instance.get("/reviews").then(({ data }) => {
    return data;
  });
};
