import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      // <Navbar
      //   bg='dark'
      //   variant='dark'
      //   expand='lg'
      //   sticky='top'
      //   className='justify-content-end'
      // >
      //   <Navbar.Brand href='/'>
      //     <Image
      //       src='./img/logo.png'
      //       alt='logo'
      //       fluid
      //       style={{ height: '2rem' }}
      //       className='ml-4'
      //     />
      //   </Navbar.Brand>
      //   <Navbar.Toggle aria-controls='basic-navbar-nav' />
      //   <Navbar.Collapse id='basic-navbar-nav'>
      //     <Nav className='mr-auto justify-content-end' />
      //     <Nav className='mr-2 justify-content-center'>
      //       <Nav.Link href='/' className='text-white'>
      //         Home
      //       </Nav.Link>
      //       <Nav.Link href='/cart'>
      //         <span className='text-white mr-2'>
      //           <i className='fas fa-cart-plus' />
      //         </span>
      //         <span className='text-white'>Cart</span>
      //       </Nav.Link>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
      <nav className='navbar navbar-expand-sm navbar-dark px-sm-5 bg-dark'>
        <Link to='/'>
          <img
            src='./img/logo.png'
            alt='logo'
            className='img-fluid'
            style={{ height: '2rem' }}
          />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <button className='btn btn-outline-info text-white'>
            <i className='fas fa-cart-plus mr-2 ' />
            Cart
          </button>
        </Link>
      </nav>
    );
  }
}
