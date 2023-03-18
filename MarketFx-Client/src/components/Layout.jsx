import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AppFooter from "./AppFooter";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: column;

  @media (max-width: 1920px) {
    width: 90%;
  }
  width: 70%;
`;
const Layout = () => {
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
