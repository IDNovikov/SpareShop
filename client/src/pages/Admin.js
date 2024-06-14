import React from "react"
import { Container } from "react-bootstrap";
import CreateBrand from "../components/modals/createBrand";
import CreateType from "../components/modals/createType";
import CreateSize from "../components/modals/createSize";
import CreateColor from "../components/modals/createColor";
import CreatePost from "../components/modals/createPost";
import CreateProduct from "../components/modals/createProduct";


const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <CreateType/>
      <CreateBrand/>
      <CreateSize/>
      <CreateColor/>
      <CreatePost/>
      <CreateProduct/>
    </Container >
  );
}

export default Admin;
