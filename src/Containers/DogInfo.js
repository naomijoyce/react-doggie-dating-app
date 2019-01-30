import React, { Component } from "react";
import CommentForm from "../Components/CommentForm.js";
import CommentList from "../Components/CommentList.js";

class DogInfo extends Component {
  state = {
    commentList: []
  }

  submitHandler = (event, newComment) => {
    event.preventDefault()
    let newArray = [...this.state.commentList, newComment]

    this.setState({
      commentList: newArray
    })


  }
  render() {
    console.log(this.state.commentList);
    return (
      <div className="dog-info">
        <img src={this.props.dog} alt="" />
        <h3>Say Hi!</h3>
        <div className="dog-comments-list">
        {
          this.state.commentList.map((comment, i) =>

            <CommentList key={i} lists={comment} />
          )
        }
        </div>

        <CommentForm onSubmit={this.submitHandler} />
      </div>
    );
  }
}

export default DogInfo;
