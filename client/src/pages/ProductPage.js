import React from "react"
import { Col, Row, Container, Image, Card, Button } from "react-bootstrap";

const product = {id: 1, name: "ClassicNosok1", price: 2500, img:["https://fb.ru/media/i/8/8/5/8/6/6/i/885866.jpg","https://avatars.dzeninfra.ru/get-zen_doc/3985561/pub_61a6045df808e423bb9491e8_61a60de40409a97f5a76619b/scale_1200", "https://forum.ecosum.ru/assets/uploads/files/1644610372261-b600a105-e0a3-4f65-b44f-6ae7c4f38579-image.png","https://avatars.mds.yandex.net/i?id=ae9af9c28344e9fbdd19854e9e8dc8b75ab6e6a2-9709143-images-thumbs&n=13","https://avatars.dzeninfra.ru/get-zen_doc/4473624/pub_609c9de79be82c4728f54b4f_609c9f4f1a7ddc2393723670/scale_1200"]}

const info = [
  {id:1,  tittle :"Красота", description : "очень красивый"},
  {id:2,  tittle :"Изящество", description:"очень изящный"},
  {id:3,  tittle :"Гармония", description:"идеально сбалансированный"},{id:4,  tittle :"Совершенство", description:"безупречный"},
  {id:5,  tittle :"Элегантность", description:"изысканный"},
  {id:6,  tittle :"Грация", description:"изящный и гармоничный"}
]

function ProductPage() {
  return (
    <Container >
    <Row>
     <Col md={3}>
     {/* реализовать через гриды плитку и для мобильной версии карусель. Это должно быть через массив, соответственно на бэке также */}
     <div className="grid_imaage"  
    //  style={{display:"grid"}}
     >
     {product.img.map(image => 
      <Image style={{gridArea:"img"}} width={150} height = {300} src={image}/>
     )}
     </div>
     </Col>
          <Col md={3}>
          <h2> {product.name}</h2>
          <Card>
          <h3> {product.price}</h3>
          <Button> Add to card</Button>
          </Card>
          <Row className="d-flex flex-column m-3">
            {info.map((inf =>
              <Row key={info.id} style={{background:"lightgray", padding:10}}>
                {inf.tittle}:{inf.description}
                </Row>
            ))}
         </Row>
     </Col>
</Row>
    </Container>
  );
}

export default ProductPage;
