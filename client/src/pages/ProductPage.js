import React, { useEffect, useState } from "react"
import { Col, Row, Container, Image, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";


const ProductPage = () => {
  const [product, setProduct] = useState({info:[]})
  const {id} = useParams()
  useEffect(()=> {
    fetchOneProduct(id).then(data => setProduct(data))
  },[]
   )

  return (
    <Container >
    <Row>
     <Col md={3}>
     {/* реализовать через гриды плитку и для мобильной версии карусель. Это должно быть через массив, соответственно на бэке также */}
     <div className="grid_imaage"  
    //  style={{display:"grid"}}
     >
     {/* {product.img.map(image => )} */}
      <Image style={{gridArea:"img"}} width={150} height = {300} src={process.env.REACT_APP_API_URL+product.img}/>
     
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
