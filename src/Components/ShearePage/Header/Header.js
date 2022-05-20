import React from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handlSignout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            {/* <img height={30} src={} alt="" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Allservice">
                All Service
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/abouts">
                About
              </Nav.Link>

              {user && (
                <>
                  <Nav.Link as={Link} to="/orders">
                    Inventory
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addItems">
                    AddItems
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myitems">
                    MyItems
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button onClick={handlSignout} className="btn btn-primary">
                  sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
