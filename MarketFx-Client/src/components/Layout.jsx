import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import styled from "styled-components";
import AppFooter from "./AppFooter";
import Header from "./Header";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  margin: 20px auto;
  flex-direction: column;

  @media (max-width: 1920px) {
    width: 90%;
  }
  width: 70%;
`;
const Layout = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    let navigate = useNavigate();

    useEffect(() => {
        if(user === undefined || user === null) {
            navigate("/login");
        }
    }, []);

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <AppFooter />
    </>
  );
};

export default Layout;
