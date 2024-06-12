import React from "react"
import { Button, Container } from "react-bootstrap";


const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} className="mt-2"> Add type</Button>
      <Button variant={"outline-dark"} className="mt-2"> Add brand</Button>
      <Button variant={"outline-dark"} className="mt-2"> Add size</Button>
      <Button variant={"outline-dark"} className="mt-2"> Add color</Button>
      <Button variant={"outline-dark"} className="mt-2"> Add product</Button>
      <Button variant={"outline-dark"} className="mt-2"> Add post</Button>
    </Container>
  );
}

export default Admin;
