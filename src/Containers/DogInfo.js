import React, {Component} from 'react';
import CommentForm from '../Components/CommentForm.js';
import CommentList from '../Components/CommentList.js';

class DogInfo extends Component {
  state={
    commentList: {
      name: "",
      comment: ""
    },

  }

  // listChangeHandler = (event) =>{
  //   console.log(event.target);
  //
  //
  //   let newList = {...this.state.commentList}
  //   newList.name = event.target.value
  //   console.log(newList.name);
  //   const comment = Object.values(newList.comment = event.target.value).join(" ").trim()
  //
  //
  //   if(event.target.classList === "name"){
  //     this.setState({
  //       commentList: {
  //
  //       }
  //     })
  //   }
  //
  //   if(event.target.classList === "comment"){
  //     this.setState({
  //       commentList: {
  //         comment: comment
  //       }
  //     })
  //   }
  // }

  nameChangeHandler = (event) => {
    let value = event.target.value
    this.setState({
      commentList: {
        name: value
      },
      nameValue: value
    })
  }

  commentChangeHandler = (event) => {
    console.log(event.target.value);
    let value = event.target.value
    this.setState({
      commentList:{
        comment: value
      },
      commentValue: value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      nameValue:"",
      commentValue: ""
    })

  }



  render(){

    return(
      <div className="dog-info">
        <h3>Say Hi!</h3>
        <img src={this.props.dog} alt="" />
        <CommentList lists={this.state.commentList}/> {/*iterate through comment list*/}
        <CommentForm
          name={this.state.nameValue}
          comment={this.state.commentValue}
          nameChange={this.nameChangeHandler}
          commentChange={this.commentChangeHandler}
          onSubmit={this.submitHandler}
        />



      </div>

    )

  }
};

export default DogInfo;
