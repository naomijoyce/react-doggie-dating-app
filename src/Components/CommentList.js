import React from 'react';

const CommentList = (props) => {
  const { lists } = props

  return (
    <div className= "comment">
      <blockquote>
        {lists.comment}
        <br/>
        <span>{lists.name}</span>
      </blockquote>
    </div>
  );
}


export default CommentList;
