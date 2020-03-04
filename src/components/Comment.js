import React from 'react';

function Comment({data}) {
  return (
    <div class="comment">
      <img src={data.author.avatar} alt="Avatar"/>
      <p>
        <strong>{data.author.name}: </strong>
        {data.content}
      </p>
    </div>
  )
}

export default Comment;