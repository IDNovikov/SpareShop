import React, { useContext } from "react"
import { Context } from ".."
import { Row } from "react-bootstrap"
import PostItem from "./PostItem"
import { observer } from "mobx-react-lite";
import {Button} from "react-bootstrap";


const PostList = observer((props) => {
  const {blog} = useContext(Context)

  return (
    <Row className="d-flex">
    {blog.posts.map(post => <div>
      <PostItem key={post.id} post={post}/>
        {props.postDelete ?
          <Button onClick={()=>props.postDelete(post.id)}>Delete</Button>
        : <></>}
    </div>
        
          
        )
    }
</Row>
  );
})

export default PostList