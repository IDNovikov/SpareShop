import React, { useContext, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchPosts  } from "../http/postsAPI";
import Pages from "../components/Pages";
import PostList from "../components/PostList";

const Blog = observer(() => {

  const {blog} = useContext(Context)

    useEffect ( () => {
        fetchPosts().then(data=>
        {console.log(data)
          blog.setPosts(data.rows)
         blog.setTotalCount(data.count)})
    }, [])

    useEffect(()=>{
      fetchPosts(blog.page, 9).then(data=>
        {
          console.log(data)
          blog.setPosts(data.rows)
         blog.setTotalCount(data.count)
        })
    }, [blog.page])

   
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

export default Blog;