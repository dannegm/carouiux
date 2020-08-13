import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

export default function NavBar() {
  return (
    <Navbar bg="light">


      <NavBar.Brand href="/" className="ml-5">Carolina Sánchez Guzmán</NavBar.Brand>
        <Navbar className="ml-auto">
            <Nav.Link href="#" className="mt-2 mb-2 ml-4 mr-4">Skills</Nav.Link>
            <Nav.Link href="#" className="mt-2 mb-2 ml-4 mr-4">Projects</Nav.Link>
            <Nav.Link href="#" className="mt-2 mb-2 ml-4 mr-4">About</Nav.Link>

        </Navbar>
        </Navbar>

  )
}
