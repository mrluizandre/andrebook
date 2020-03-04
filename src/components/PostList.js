import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Andre Costa",
          avatar: "http://placehold.it/100x100"
        },
        date: "June 4th, 2020",
        content: "Does anyone know what's happening to Marcus?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diogo Silva",
              avatar: "http://placehold.it/100x100/aaaddd"
            },
            content: "Marcus, which one?"
          },
          {
            id: 2,
            author: {
              name: "Alves",
              avatar: "http://placehold.it/100x100/aaaddd"
            },
            content: "Taca-le pau Marcus!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "http://placehold.it/100x100"
        },
        date: "June 3rd, 2020",
        content: "Marcus my cousin is arriving in town today.",
        comments: [
          {
            id: 1,
            author: {
              name: "Dieguito Fernandito",
              avatar: "http://placehold.it/100x100/aaaddd"
            },
            content: "👏👏👏👏 who cares?"
          }
        ]
      }
    ]
  };

  render(){
    return(
      <section>
        <div className="container">
          {this.state.posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </section>
    )
  }
}

export default PostList;