import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Logo from "../assets/images/logo-transparent.png";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "./Dropdown";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  const [token, setToken] = useState("");

  const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;

    &:hover {
      color: #000;
      // background: in
    }
  `;

  const styledNavContainer = styled.div`
    @media (max-width: 1920px) {
      width: 90%;
    }
    width: 70%;
  `;
  const StyledContainer = styled(Container)`
    background-color: #3b4859;
    padding: 10px 0px;
    margin-top: 0px;
    color: #eee;
    text-align: center;
  `;

  const StyledNavbar = styled(Navbar)`
    height: 70px;
  `;

  const DownArrow = styled.p`
    font-size: 30px;
    margin-left: 7px;
  `;

  const StyledCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;

  useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
  }, []);

  return (
    <>
      <StyledNavbar className="shadow-0" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href={!token ? "/login" : null}
                // onClick={token ? localStorage.removeItem("token") : null}
              >
                {token ? (
                  <span
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem('user');
                      setToken("");
                    }}
                  >
                    LOGOUT
                  </span>
                ) : (
                  "LOGIN"
                )}
              </Nav.Link>
              <Nav.Link href="/register">REGISTER</Nav.Link>
            </Nav>

            <Form className="d-flex" action="/search" method="get">
              <InputGroup>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Search ..."
                  name="news"
                />
                <InputGroup.Text id="basic-addon2">
                  <FaSearch></FaSearch>
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <Dropdown></Dropdown>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>

      <StyledContainer fluid>
        <Row className="w-75 m-auto">
          {/* <StyledCol>Market News  <FaAngleDown/> </StyledCol>
          <StyledCol>Analysis News <FaAngleDown/></StyledCol>
          <StyledCol>Curriencies <FaAngleDown/></StyledCol>
          <StyledCol>Stocks <FaAngleDown/> </StyledCol>
          <StyledCol>Crypto <FaAngleDown/> </StyledCol> */}

          <Nav variant="pills" activeKey="1" className="justify-content-center">
            <NavDropdown title="Market News" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <StyledLink to={"/"}>Market Overview</StyledLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <StyledLink to={"/CurrencyNews"}>Curriency News</StyledLink>
              </NavDropdown.Item>
              {/* <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Calender" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <StyledLink to="/economiccalender">
                  Economic Calender
                </StyledLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Curiencies" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <StyledLink to={"/CurrencyData"}>Curriency Data</StyledLink>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <StyledLink to={"/dataportal"}>
                  Real-Time Curriencies Data
                </StyledLink>
              </NavDropdown.Item>
              {/* <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Gold" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <StyledLink to={"/dataportal"}>Data Portal</StyledLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Crude Oil" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <StyledLink to={"/dataportal"}>Data Portal</StyledLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Support" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <StyledLink to={"/dataportal"}>Data Portal</StyledLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Row>
      </StyledContainer>
    </>
  );
};

export default Header;
