import React from "react";

import PostListItem from "./PostListItem";

export default function PostListWrapper(props) {
  return (
    <div className="user-blog__posts">
      {props.posts.map((post) => (
        <PostListItem
          key={post.id}
          postId={post.id}
          userId={post.userId}
          image={post.image}
          title={post.title}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
}
