import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    name: "",
    comment: ""
  }

  changeHandler = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitHandler = (event) =>{
    event.preventDefault()
    this.props.onSubmit(event,this.state)
    this.setState({
      name: "",
      comment: ""
    })
  }


  render() {
    return (
      <div className="comments">
        <form className="comments-form" onSubmit={this.submitHandler}>
          <h4>Woof! Woof!</h4>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Your name"
            onChange={this.changeHandler}
          />
          <br/>
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            placeholder="Say something"
            onChange={this.changeHandler}
          />
          <br/>
          <button>Woof!</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
