import React, { useContext } from "react";   
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import {Context} from "../index"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button, Image} from "react-bootstrap"
import {Link, useLocation, useNavigate } from "react-router-dom"
import BasketModal from "./modals/basketModal";

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate() 
    const location = useLocation()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem("token")

      navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav.Link style={{color:"white"}}href={SHOP_ROUTE}>MAGAZINE</Nav.Link>
          <Nav className="ml-auto">
            <Nav.Link href="certificate">Gift certificate</Nav.Link>
            <Nav.Link href="post">Blog</Nav.Link>

            {user.isAuth ? 
            <Nav className="ml-auto" style={{color:"white"}}>
            <Button onClick={()=> navigate(ADMIN_ROUTE)}>Admin panel</Button>
            <Button onClick={()=> logOut()}>Logout</Button>
            </Nav>
            :
            <></>
            }
           
          </Nav>
          <BasketModal/>
          </Container>
      </Navbar>
    )
}

export default NavBar