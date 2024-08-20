import React, { useContext } from "react";   
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import {Context} from "../index"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, POST_ROUTE, CERTIFICATE_ROUTE } from "../utils/consts";
import {Button, Image} from "react-bootstrap"
import {Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import BasketButton from "./UI/basketButton";

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate() 
    const location = useLocation(-1)

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
            <Nav.Link href={CERTIFICATE_ROUTE}>Gift certificate</Nav.Link>
            <Nav.Link href={POST_ROUTE}>Blog</Nav.Link>
            
            {user.isAuth ? 
            <Nav className="ml-auto" style={{color:"white"}}>
            <Button onClick={()=> navigate(ADMIN_ROUTE)}>Admin panel</Button>
            <Button onClick={()=> logOut()}>Logout</Button>
            </Nav>
            :
            <></>
            }
           
          </Nav>
          <Link to="/basket" state={{ background: location }}><BasketButton/></Link>
          <Outlet />
          </Container>

      </Navbar>
    )
}

export default NavBar