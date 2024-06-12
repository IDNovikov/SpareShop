import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import Typebar from "../components/Typebar";
import Sizebar from "../components/Sizebar";
import Colorbar from "../components/Colorbar";
import Brandbar from "../components/Brandbar";
import Selectedbar from "../components/Selectedbar";
import Productlist from "../components/Productlist";

const Shop = () => {
  return (
    <Container>
  <Row className="mt-3">
   <Col className="md-3" md={3}>
    <Typebar/>
    <Brandbar/>
    <Sizebar/>
    <Colorbar/>
  </Col>


  <Col md={9}> 
<Selectedbar/>
<Productlist/>
  </Col>
</Row>

    </Container>
  );
}

export default Shop;
