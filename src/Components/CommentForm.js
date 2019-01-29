import React, { Component } from "react";

class CommentForm extends Component {
  state = {};

  render() {
    const { nameChange, commentChange, onSubmit, name, comment } = this.props;
    console.log(this.props);
    return (
      <div className="comments">
        <form className="comments-form" onSubmit={event => onSubmit(event)}>
          <h4>Woof! Woof!</h4>
          <input
            type="text"
            className="name"
            value={name}
            placeholder="Your name"
            onChange={event => nameChange(event)}
          />
          <input
            type="text"
            className="comment"
            value={comment}
            placeholder="Say something"
            onChange={event => commentChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
