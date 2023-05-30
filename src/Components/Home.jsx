export const Home = ({ allReviews }) => {
  return (
    <ul id="preview-card">
      {allReviews.map((review, index) => {
        if (index < 4) {
          return (
            <li key={review.review_id} className="list">
              <p>{review.title}</p>
              <img
                className="game-imgs"
                src={review.review_img_url}
                alt={review.title}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};
