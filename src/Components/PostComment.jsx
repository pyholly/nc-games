import { useContext, useState } from "react";
import { UserContext } from "../user";
import { postComment } from "../../utils";

export const PostComment = ({ review_id, setNewComment }) => {
  const { username, loggedIn } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const [commentPosting, setCommentPosting] = useState(true);
  const [err, setErr] = useState(false);

  function handleChange(e) {
    setCommentBody(e.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    postComment(review_id, commentBody, username).then(({ comment }) => {
      setCommentPosting(false);
      setCommentBody("");
      setNewComment((currComs) => {
        return [comment, ...currComs];
      }).catch(() => {
        setErr(true);
      });
    });
  }

  console.log(err);

  return (
    <section>
      {!loggedIn ? (
        <p>Please log in to post a comment</p>
      ) : (
        <form id="form">
          <p>Posting as {username}:</p>
          <label htmlFor="form-body"></label>
          <textarea
            onChange={handleChange}
            type="textarea"
            id="form-body"
            required
            placeholder="Enter comment here"
            value={commentBody}
          />
          <button onClick={handleClick}>Post my comment!</button>
        </form>
      )}
      {err ? <p>Oops, an error occurred. Please Try again!</p> : null}
    </section>
  );
};
