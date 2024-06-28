import React, { useContext, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchPosts  } from "../http/postsAPI";
import Pages from "../components/Pages";
import PostList from "../components/PostList";

const BlogWall = observer(() => {

  const {posts} = useContext(Context)

    // useEffect ( () => {
    //     fetchPosts().then(data=>
    //     {posts.setPosts(data.rows)
    //      posts.setTotalCount(data.count)})
    // }, [])

    // useEffect(()=>{
    //   fetchPosts(posts.page, 9).then(data=>
    //     {post.setPosts(data.rows)
    //      post.setTotalCount(data.count)
    //     })
    // }, [post.page])

  return (
    <Container>
  <Row className="mt-3">
  <Col md={9}> 
<PostList/>
<Pages/>
  </Col>
</Row>
    </Container>
  );
}
)

export default BlogWall;