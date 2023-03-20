import React from "react";
import styled from "styled-components";

import Logo from "../assets/images/logo-transparent.png";
const AppFooter = () => {
  const Footer = styled.footer`
    width: 100%;
    position: sticky;
    background-color: #3b4859;
  `;

  const FooterContainer = styled.div`
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1920px) {
      width: 90%;
    }
    width: 70%;
  `;

  const Left = styled.div`
    flex: 1;
  `;
  const Center = styled.div`
    flex: 1;
  `;
  const Right = styled.div`
    flex: 1;
  `;

  const Last = styled.div`
    flex: 1;
  `;

  //   Common Stylings

  const FooterHeading = styled.h1`
    font-weight: 700;
    font-size: 20px;
    color: white;
  `;

  const FooterList = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
  `;

  const FooterListItem = styled.li`
    color: #b7b7b8;
  `;

  const LogoImage = styled.img`
    height: 200px;
  `;

  return (
    <Footer>
      <FooterContainer>
        <Left>
          <LogoImage src={Logo} alt="" />
        </Left>

        <Center>
          <FooterHeading>MarketFX News</FooterHeading>

          <FooterList>
            <FooterListItem> Market Overview</FooterListItem>
            <FooterListItem>Real-Time News</FooterListItem>
            <FooterListItem>Market Themes</FooterListItem>
            <FooterListItem>Market News Now</FooterListItem>
          </FooterList>
        </Center>

        <Right>
          <FooterHeading>MarketFX</FooterHeading>

          <FooterList>
            <FooterListItem>About Us</FooterListItem>
            <FooterListItem>Authors</FooterListItem>
            <FooterListItem>Contact Us</FooterListItem>
            <FooterListItem>Archives</FooterListItem>
          </FooterList>
        </Right>

        <Last>
          <FooterHeading>MarketFX</FooterHeading>

          <FooterList>
            <FooterListItem>About Us</FooterListItem>
            <FooterListItem>Authors</FooterListItem>
            <FooterListItem>Contact Us</FooterListItem>
            <FooterListItem>Archives</FooterListItem>
          </FooterList>
        </Last>
      </FooterContainer>
    </Footer>
  );
};

export default AppFooter;
