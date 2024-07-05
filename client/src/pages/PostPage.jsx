import React, { useEffect, useState } from "react"
import { Col, Row, Container, Image, } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOnePost } from "../http/postsAPI";


const PostPage = () => {
  const [post, setPost] = useState({info:[]})
  const [images, setImages] = useState([])
  const {id} = useParams()
  
  useEffect(()=> {
    fetchOnePost(id).then(data => {
      setPost(data)
      let string = data.img
      let str = string.replace(/[\"\[\]\\\\s]/g, '')
      let array = str.split(",")
      setImages(array)
    })},[])

  return (
    <Container >
    <Row>
     <Col md={3}>
     {/* реализовать через гриды плитку и для мобильной версии карусель. Это должно быть через массив, соответственно на бэке также */}
     
     <div className="grid_imaage">
      {images.map(image => 
      <Image style={{gridArea:"img"}} key = {images.indexOf(image)} width={150} height = {300} src={process.env.REACT_APP_API_URL+image}/>)}
     </div>

     </Col>
          <Col md={3}>
          <h2> {post.tittle}</h2>
          <h3> {post.discription}</h3>
     </Col>
</Row>
    </Container>
  );
}

export default PostPage;