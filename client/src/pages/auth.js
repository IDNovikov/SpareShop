import React from "react"
import {Container, Form} from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import {NavLink, useLocation} from "react-router-dom"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts"

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height : window.innerHeight-54}}
      >
        <Card style={{width:600}} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization":"Registration"}</h2>
        <Form className="d-flex flex-column">
        <Form.Control
        className="mt-3"
        placeholder="Email"
        />
         <Form.Control
        className="mt-3"
        placeholder="Password"
        />
        <Row className = "d-flex justify-content-between mt-3 pl-3 pr-3">
          {isLogin ? 
        <div>
        You don`t have an accaunt?
        <NavLink to={REGISTRATION_ROUTE}> Create accaunt </NavLink>
        </div>
        :
        <div>
        You have an accaunt?
        <NavLink to={LOGIN_ROUTE}> Login </NavLink>
        </div>
        }
        <Button className="mt-3"
          variant={"outline-success"}> {isLogin ? "Login" : "Registrate"}
          </Button>
       </Row>
        </Form>
        </Card>
    </Container>
  );
}

export default Auth;
