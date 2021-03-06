import React, { Component } from 'react';
import { Navbar, 
  Nav, 
  FormControl, 
  Container, 
  Button, 
  Form} from 'react-bootstrap';
import logo from './logo.png';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';

export default class Header extends Component {
  render() {
    return (
      <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
               <img 
               scrs={logo}
               height="30"
               width="30"
               className="d-inline-block align-top"
               alt="Logo"
               />React site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id='responsive-navbar-nav'>
               <Nav className="mr-auto">
                 <Nav.Link href="/">Home</Nav.Link>
                 <Nav.Link href="abaut">About us</Nav.Link>
                 <Nav.Link href="contacts">Contacts</Nav.Link>
                 <Nav.Link href="blog">Blog</Nav.Link>
               </Nav>
               <Form inline >
                 <FormControl 
                   type="text"
                   placeholder="Search"
                   className="mr-sm-2"
                 />
                 <Button variant="outline-info">Search</Button> 
               </Form>
            </Navbar.Collapse>
         </Container>
      </Navbar>

      <Router>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contacts" component={Contacts}/>
         <Route exact path="/blog" component={Blog}/>
        </Switch>
      </Router>
      </>
    )
  }
}
