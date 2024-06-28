import React, { useEffect, useState } from "react"
import { Col, Row, Container, Image, Card, Button, SplitButton } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";


const ProductPage = () => {
  const [product, setProduct] = useState({info:[]})
  const [images, setImages] = useState([])
  const {id} = useParams()
  
  useEffect(()=> {
    fetchOneProduct(id).then(data => {
      setProduct(data)
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
          <h2> {product.name}</h2>
          <Card>
          <h3> {product.price}</h3>
          <Button> Add to card</Button>
          </Card>
          <Row className="d-flex flex-column m-3">
            {product.info.map((inf =>
              <Row key={inf.id} style={{background:"lightgray", padding:10}}>
                {inf.tittle}:{inf.discription}
                </Row>
            ))}
         </Row>
     </Col>
</Row>
    </Container>
  );
}

export default ProductPage;
