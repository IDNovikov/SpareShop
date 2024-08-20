import React from "react"
import { Container } from "react-bootstrap";
import CreateBrand from "../components/modals/createBrand";
import CreateType from "../components/modals/createType";
import CreateSize from "../components/modals/createSize";
import CreateColor from "../components/modals/createColor";
import CreatePost from "../components/modals/createPost";
import CreateProduct from "../components/modals/createProduct";
import ManageCerti from "../components/modals/manageCerti";
import ManageBasket from "../components/modals/manageBasket";

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <CreateType/>
      <CreateBrand/>
      <CreateSize/>
      <CreateColor/>
      <CreatePost/>
      <CreateProduct/>
      <ManageCerti/>
      <ManageBasket/>
    </Container >
  );
}

export default Admin;
