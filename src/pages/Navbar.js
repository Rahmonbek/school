import React, { Component } from 'react'
import 'aos'
import style from './Navbar.module.css'
import flagUZ from '../img/flagUZ.png'
import flagRU from '../img/flagRU.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavbarContainer } from './StyleNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AOS } from 'aos'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
export default class NavBar extends Component {
    
  render() {
    return (
      <div>
        <div>
        <NavbarContainer>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand><p className={'maktabLogo'} style={{cursor:'pointer', marginTop:'8px', }}><Link to='/uz'>Maktab logosi</Link></p></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: 'white'}} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto" >
                                    <NavLink style={{marginLeft:'20px'}} to="/uz"><p className='navLink'>Bosh sahifa</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/hayot/uz"><p className='navLink'>Maktab haqida</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/qabul/uz"><p className='navLink'>Qabul</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/yangiliklar/uz"><p className='navLink'>Yangiliklar</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/rahbariyat/uz"><p className='navLink'>Maktab ma'muriyati</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/alochilar/uz"><p className='navLink'>Maktab alochilari</p></NavLink>
                                </Nav>
                                <div className={style.bayroqlar}>
                              <Link to='/uz'><img src={flagUZ} /></Link>
                              <Link to='/ru'><img src={flagRU} /></Link>
                          </div>
                                <Link to='/login/uz' className='kirish'><FontAwesomeIcon icon={faUserCircle} className='userIcon' />  Kirish</Link>
                            </Navbar.Collapse>
                          
                        </Container>
                    </Navbar>
                </NavbarContainer>
          </div>
      </div>
    )
  }
}