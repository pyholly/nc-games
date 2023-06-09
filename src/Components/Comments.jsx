import { useState, useEffect } from "react";
import { fetchComments } from "../../utils";
import { PostComment } from "./PostComment";

export const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [newComment, setNewComment] = useState([]);

  useEffect(() => {
    fetchComments(review_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoadingComments(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newComment]);

  return (
    <>
      <h2 className="title">Comments</h2>
      <PostComment
        review_id={review_id}
        newComment={newComment}
        setNewComment={setNewComment}
      />
      {isLoadingComments && comments.length === 0 ? (
        <p>No comments yet for this review!</p>
      ) : (
        <ul className="border">
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="list comment-card">
                <p className="comment">{comment.body}</p>
                <p className="comment-author">Author: {comment.author}</p>
                <p> Created: {comment.created_at.slice(0, 10)}</p>
                <button className="btn"> Upvote! </button>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
