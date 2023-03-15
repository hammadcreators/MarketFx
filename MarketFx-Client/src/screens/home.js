import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { InputGroup, Form, TabContainer } from "react-bootstrap";
import styled from "styled-components";

import "./home.css";
const Container = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
`;

const MiniContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Right = styled.div`
  flex: 1;
  height: 60vh;
`;

const FeaturedImg = styled.div`
  flex: 2;
  position: relative;
  height: 100%;
  background-image: url(https://a.c-dn.net/b/4dKtJi/GettyImages-155140239+resized.jpg);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 60%;
  &:before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

const FeaturedBox = styled.div`
  position: absolute;
  top: 50;
  left: 50;
  color: white;
  width: 90%;
`;
const FeaturedInfo = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
`;
const FeaturedDescription = styled.p`
  font-size: 14px;
`;

const FeatureNewsList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px;
`;

const FeaturedNews = styled.div`
  border-bottom: 1px solid lightgray;

  height: max-content;
`;

const FeaturedNewsTitle = styled.h1`
  font-weight: 700;
  font-size: 17px;
`;

const FeaturedNewsTime = styled.p`
  color: lightgray;
  font-size: 12px;
`;

const TabsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
  height: 30px;
`;
const Tab = styled.p``;

const Left = styled.div`
  flex: 2;
  display: flex;
`;

const Home = () => {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>MarketFx</p>
        </div>
        <div className="func">
          <div className="search">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                <FaSearch />{" "}
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div className="logbuttons">
            <button className="SignUp btn btn-primary mr-4">SignUp</button>
            <button className="Login btn btn-outline-primary ml-5">
              Login
            </button>
          </div>
        </div>
      </div>
      <nav></nav>

      <Container>
        <h2>Market News</h2>
        <MiniContainer>
          <Left>
            <FeaturedImg>
              <FeaturedBox>
                <FeaturedInfo>
                  Gold Price – XAU/USD Eyes Support as CPI Nears and US Bond
                  Yields Rebound
                </FeaturedInfo>

                <FeaturedDescription>
                  The latest US inflation release may not have the same market
                  effect as in the past as the global interest rate backdrop has
                  changed post-SVB failure.
                </FeaturedDescription>
              </FeaturedBox>
            </FeaturedImg>

            <FeatureNewsList>
              <p>MORE FEATURED ARTICLES</p>
              <FeaturedNews>
                <FeaturedNewsTitle>
                  Euro Price Forecast: Wait & See for EUR/USD, US CPI
                </FeaturedNewsTitle>
                <FeaturedNewsTime>1 hour ago</FeaturedNewsTime>
              </FeaturedNews>

              <FeaturedNews>
                <FeaturedNewsTitle>
                  Euro Price Forecast: Wait & See for EUR/USD, US CPI
                </FeaturedNewsTitle>
                <FeaturedNewsTime>2 hour ago</FeaturedNewsTime>
              </FeaturedNews>

              <FeaturedNews>
                <FeaturedNewsTitle>
                  Breaking News: UK Unemployment Rate Remains Steady at 3.7%,
                  GBP/USD Edges Lower
                </FeaturedNewsTitle>
                <FeaturedNewsTime>3 hour ago</FeaturedNewsTime>
              </FeaturedNews>
            </FeatureNewsList>
          </Left>
          <Right></Right>
        </MiniContainer>

        <MiniContainer>
          <Left>
            <TabsContainer>
              <Tab>All News</Tab>
              <Tab>Old News</Tab>

              <Tab>Crude Oil News</Tab>

              <Tab>Forex News</Tab>
            </TabsContainer>
          </Left>
          <Right></Right>
        </MiniContainer>
      </Container>
    </div>
  );
};
export default Home;
