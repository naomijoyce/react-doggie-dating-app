import React, {Component} from 'react';
import CommentForm from '../Components/CommentForm.js';
import CommentList from '../Components/CommentList.js';

class DogInfo extends Component {
  state={
    commentList: {
      name: "",
      comment: ""
    }
  }

  listChangeHandler = (event) =>{
    console.log(event.target.value);
    let newList = {...this.state.commentList}

    if(event.target.classList === "name"){
      this.setState({
        commentList: Object.values(newList.name = event.target.value)
      })
    }

    if(event.target.classList === "comment"){
      this.setState({
        commentList: Object.values(newList.comment = event.target.value)
      })
    }

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
        <CommentList lists={this.state.commentList}/>
        <CommentForm
          nameChange={this.listChangeHandler}
          commentChange={this.listChangeHandler}
          onSubmit={this.submitHandler}
        />



      </div>

    )

  }
};

export default DogInfo;
