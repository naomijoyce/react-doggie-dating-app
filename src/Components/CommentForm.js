import React from "react";

const CommentForm = props => {
  const { nameChange, commentChange, onSubmit } = props;

  return (
    <div className="comments">
      <form className="comments-form" onSubmit={event => onSubmit(event)}>
        <h4>Woof! Woof!</h4>
        <input
          type="text"
          className="name"
          placeholder="Your name"
          onChange={event => nameChange(event)}
        />
        <input
          type="text"
          className="comment"
          placeholder="Say something"
          onChange={event => commentChange(event)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CommentForm;
