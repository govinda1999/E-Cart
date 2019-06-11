import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        bg='dark'
        variant='dark'
        expand='lg'
        sticky='top'
        className='justify-content-end'
      >
        <Navbar.Brand href='/'>
          <Image
            src='./img/logo.png'
            alt='logo'
            fluid
            style={{ height: '2rem' }}
            className='ml-4'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto justify-content-end' />
          <Nav className='mr-2 justify-content-center'>
            <Nav.Link href='/' className='text-white'>
              Home
            </Nav.Link>
            <Nav.Link href='/cart'>
              <span className='text-white mr-2'>
                <i className='fas fa-cart-plus' />
              </span>
              <span className='text-white'>Cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
