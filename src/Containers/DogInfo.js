import React, {Component} from 'react';
import CommentForm from '../Components/CommentForm.js';
import CommentList from '../Components/CommentList.js';

class DogInfo extends Component {
  state={
    commentList: {
      name: "",
      comment: ""
    },
    nameValue: "",
    commentValue: ""

  }

  listChangeHandler = (event) =>{
    console.log(event.target);


    let newList = {...this.state.commentList}
    newList.name = event.target.value
    console.log(newList.name);
    const comment = Object.values(newList.comment = event.target.value).join(" ").trim()


    if(event.target.classList === "name"){
      this.setState({
        commentList: {

        }
      })
    }

    if(event.target.classList === "comment"){
      this.setState({
        commentList: {
          comment: comment
        }
      })
    }
    console.log(newList);
  }

  nameChangeHandler = () => {
    console.log('whatever this means');
  }

  commentChangeHandler = () => {
    console.log('i hate everything about this');
  }

  submitHandler = (event) => {
    event.preventDefault();

  }



  render(){
    console.log(Object.values(this.state.commentList.name));

    return(
      <div className="dog-info">
        <h3>Say Hi!</h3>
        <img src={this.props.dog} alt="" />
        <CommentList lists={this.state.commentList}/> {/*iterate through comment list*/}
        <CommentForm
          name={this.state.nameValue}
          comment={this.state.commentValue}
          nameChange={this.listChangeHandler}
          commentChange={this.listChangeHandler}
          onSubmit={this.submitHandler}
        />



      </div>

    )

  }
};

export default DogInfo;
