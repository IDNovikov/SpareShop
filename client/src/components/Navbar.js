import React, { useContext } from "react";   
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import {Context} from "../index"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
             <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav.Link style={{color:"white"}}href={SHOP_ROUTE}>MAGAZINE</Nav.Link>
          <Nav className="ml-auto">
            <Nav.Link href="#certificate">Gift certificate</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>

            {user.isAuth ? 
            <Nav className="ml-auto" style={{color:"white"}}>
            <Button onClick={()=> navigate(ADMIN_ROUTE)}>Admin panel</Button>
            <Button onClick={()=> navigate(LOGIN_ROUTE)}>Logout</Button>
            </Nav>
            :
            <Button href={REGISTRATION_ROUTE} onClick={() => user.setIsAuth(true)}>Autorization</Button>
            }
           
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar