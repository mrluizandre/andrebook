import React from 'react';
import Comment from './Comment';

function Post({data}){
  return(
    <div class="post">
      <div className="user">
        <img src={data.author.avatar} alt=""/>
        <div className="userInfo">
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </div>
      </div>
      <p>{data.content}</p>
      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  )
}

export default Post;