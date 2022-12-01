import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarHeader() {
  return (
    <Navbar className='navb'>
    <Container>
      <Navbar.Brand href="#home">Productivity</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="timeblock">Time Block</Nav.Link>
        <Nav.Link href="habitchain">Habit Chain</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
