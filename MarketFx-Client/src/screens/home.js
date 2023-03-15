
import { FaSearch } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";
import styled from "styled-components";

// import "./home.css";
import NewsComponent from "../components/NewsComponent";
import AppButton from "../components/AppButton";
import AppFooter from "../components/AppFooter";
import NewsData from "../components/NewsData";
import { useEffect, useState } from "react";
import { NewsApi } from "../Api/NewsApi";

const newsList = [
  {
    image: `https://a.c-dn.net/b/0MZ5fM/iStock-173598950.jpg`,
    title: `S&P 500, Dow Jones and Nasdaq Rip Higher - Banks & Tech Stocks
    Surge`,
    time: `Mar 14, 2023 10:00 AM -07:00`,
    description: `US stock futures have experienced a sharp rebound, buoyed by a
    recovery in bank stocks and lower rate expectations. Nasdaq
    100 leads followed by S&P 500 and Dow.`,
  },

  {
    image: `https://a.c-dn.net/b/33CFoH/USDJPY.jpg`,
    title: `USD/JPY Rebounds as Investors Pile into Japanese Government Bonds`,
    time: `Mar 14, 2023 7:47 AM -07:00`,
    description: `
    The 10 year Japanese government bond yield dropped below the Bank of Japan’s former cap of 0.25% as investors seek safety amid local banking stocks decline`,
  },

  {
    image: `https://a.c-dn.net/b/1dINoI/GettyImages-471112101+resized.jpg`,
    title: `USD/JPY Rebounds as Investors Pile into Japanese Government Bonds`,
    time: `Mar 14, 2023 5:46 AM -07:00`,
    description: `
    
Headline US inflation fell to 6% from 6.4% as expected, while core inflation edged 0.1% lower to 5.5%.`,
  },


  {
    image: undefined,
    title: `Bitcoin and Ethereum Extend Gains on Hopes of Less-Hawkish Fed`,
    time: `Mar 14, 2023 4:30 AM -07:00`,
    description: `
    Bitcoin and Ethereum have extended gains after an impressive rally on Monday, ensuing from the collapse of SVB and an injection of liquidity from US authorities.`,
  },

  {
    image: undefined,
    title: `Gold Price – XAU/USD Eyes Support as CPI Nears and US Bond Yields Rebound`,
    time: `Mar 14, 2023 3:20 AM -07:00`,
    description: `
   
The latest US inflation release may not have the same market effect as in the past as the global interest rate backdrop has changed post-SVB failure.`,
  },

  {
    image: undefined,
    title: `Euro Price Forecast: Wait & See for EUR/USD, US CPI`,
    time: `Mar 14, 2023 2:25 AM -07:00`,
    description: `
    EUR/USD is eyeing the all important US CPI release while trading at a key inflection point.`,
  },
];

const Container = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  width: 70%;
`;

const MiniContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Right = styled.div`
  flex: 1;
  height: 40vh;
`;

const FeaturedImg = styled.div`
  cursor: pointer;
  flex: 2;
  position: relative;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
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
  margin: 10px 30px;
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
  margin: 20px  0px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  height: max-content;
`;
const Tab = styled.p`
  text-align: center;
  flex: 1;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.active ? "1px solid red" : "1px solid #eeeff0"};
  margin: 0px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  padding: 10px;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;


// Right side  (HAMMAD)




const Home = () => {
  const [fetchedNews, setFetchedNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await NewsApi.get(`/everything?q=bitcoin`);
        setFetchedNews(response.articles);
      } catch (ex) {
        alert(ex)
      }
    })();
  })
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
          <Left column={true}>

            {/*  */}
            <TabsContainer>
              <Tab active={true}>All News</Tab>
              <Tab>Old News</Tab>

              <Tab>Crude Oil News</Tab>

              <Tab>Forex News</Tab>
            </TabsContainer>

            {fetchedNews.map((news) => {
              return <NewsComponent news={news} />;
            })}


            <AppButton />
          </Left>
          <Right>

            {/* Hammad Works  */}

            {/* One div => div, div, div, div */}
            {/* displauy:L flex; justofy-content: space-=between, flex: 1, flex: 1, flex: 1, flex: 1 */}


            <NewsData />

          </Right>
        </MiniContainer>
      </Container>



      <AppFooter />
    </div>
  );
};
export default Home;
