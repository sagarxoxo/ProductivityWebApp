import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserContext from "../../context/UserContext";
import { auth } from "../../firebase/firebaseConfig";

export default function NavbarHeader({ user, setUser }) {
  const router = useRouter();
  const contUser = useContext(UserContext);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        contUser.setUser("");
        setUser("");
        localStorage.setItem("users", "");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar className="navb">
      <Container>
        <Navbar.Brand href="#home">Productivity</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="timeblock">Time Block</Nav.Link>
          <Nav.Link href="habitchain">Habit Chain</Nav.Link>
          {user && <Nav.Link onClick={handleSignOut}>Logout</Nav.Link>}
          {!user && <Nav.Link href="signin">Sign In</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
}
