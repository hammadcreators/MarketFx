import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Logo from "../assets/images/logo-transparent.png";
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from './Dropdown';
import {
  Outlet
} from 'react-router-dom';
const Header = () => {
  const token = localStorage.getItem("token");


  
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
  
  
  
  return (
    <>
    
      <StyledNavbar className='shadow-0' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
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
              <Nav.Link href="/">{token? "LOGOUT": "LOGOUT"}</Nav.Link>
              <Nav.Link href="/register">REGISTER</Nav.Link>
            </Nav>

            <Form className='d-flex'>
              <InputGroup>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Search ..."
                />
                <InputGroup.Text id="basic-addon2"><FaSearch></FaSearch></InputGroup.Text>
              </InputGroup>
            </Form>
            <Dropdown></Dropdown>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>

      <StyledContainer fluid>
        <Row className="w-75 m-auto">
          <StyledCol>Market News  <FaAngleDown/> </StyledCol>
          <StyledCol>Analysis News <FaAngleDown/></StyledCol>
          <StyledCol>Curriencies <FaAngleDown/></StyledCol>
          <StyledCol>Stocks <FaAngleDown/> </StyledCol>
          <StyledCol>Crypto <FaAngleDown/> </StyledCol>

        </Row>

      </StyledContainer>



      
    </>



  )
}

export default Header