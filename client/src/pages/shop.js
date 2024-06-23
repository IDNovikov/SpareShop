import React, { useContext, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap";
import Typebar from "../components/Typebar";
import Sizebar from "../components/Sizebar";
import Colorbar from "../components/Colorbar";
import Brandbar from "../components/Brandbar";
import Selectedbar from "../components/Selectedbar";
import Productlist from "../components/Productlist";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchTypes, fetchBrands, fetchColors, fetchSizes, fetchProducts  } from "../http/productAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {

  const {product} = useContext(Context)

    useEffect ( () => {
      fetchTypes().then(data=>product.setTypes(data))
      fetchBrands().then(data=>product.setBrands(data))
      fetchColors().then(data=>product.setColors(data))
      fetchSizes().then(data=>product.setSizes(data))
      fetchProducts().then(data=>
        {product.setProducts(data.rows)
         product.setTotalCount(data.count)})
    }, [])

    useEffect(()=>{
      fetchProducts(product.selectedTypes.id, product.selectedColors.id, product.selectedSizes.id, product.selectedBrands.id, product.page, 9).then(data=>
        {product.setProducts(data.rows)
         product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedTypes, product.selectedColors, product.selectedSizes, product.selectedBrands,])

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
<Pages/>
  </Col>
</Row>

    </Container>
  );
}
)

export default Shop;
