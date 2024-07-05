import React, { useContext } from "react"
import { Context } from ".."
import { Row } from "react-bootstrap"
import PostItem from "./PostItem"
import { observer } from "mobx-react-lite";

const PostList = observer(() => {
  const {blog} = useContext(Context)

  console.log(blog.posts)
  return (
    <Row className="d-flex">
    {blog.posts.map(post =>
        <PostItem key={post.id} post={post}/>
        )
    }
</Row>
  );
})

export default PostList