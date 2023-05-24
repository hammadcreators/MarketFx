import { FaAngleDown, FaSearch } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";
import styled from "styled-components";

// import "./home.css";
import NewsComponent from "../components/NewsComponent";
import AppButton from "../components/AppButton";
import AppFooter from "../components/AppFooter";

import NewsData from "../components/NewsData";
import { useEffect, useState } from "react";
import { NewsApi } from "../Api/NewsApi";
import Header from "../components/Header";

import CalenderDetail from "../components/CalenderDetail";
import { MarketFxApi } from "../Api/MarketFxApi";

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
  padding-top: 10px;
  margin: 0px;
`;

const FeaturedNewsTime = styled.p`
  color: lightgray;
  font-size: 12px;
  margin-bottom: 5px;
  text-align: right;
`;

const TabsContainer = styled.div`
  margin: 20px 0px;
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

// {/* Economic Calender */}

const EconomicCalenderContainer = styled.div`
  height: 300px;
  position: static;
`;

const EconomicCalenderItem = styled.div`
  border-bottom: 1px solid #eeeff0;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  transition: all 0.8s ease;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const EconomicCalenderImpact = styled.div`
  background-color: #82bbe7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  padding: 5px;
  height: max-content;
  font-size: 12px;
  flex: 1;
  width: max-content !important;
`;

const EconomicCalenderTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  flex: 2;
  padding-left: 7px;
`;

const EconomicCalenderActualData = styled.div`
  font-weight: 700;
  font-size: 12px;
  flex: 1;
`;

const EconomicCalenderPreviousData = styled.div`
  font-weight: 700;
  font-size: 12px;
  flex: 1;
`;

const NormalWeight = styled.span`
  font-weight: normal;
`;

const Calender = styled.div`
  height: 400px;
  overflow: hidden;
`;
const Home = () => {
  const [fetchedNews, setFetchedNews] = useState([]);
  const [tab, setTab] = useState("economy");
  const [calender, setCalender] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const setTabHandler = async (tab) => {
    setTab(tab);
    await fetchNews(tab);
  };

  const fetchNews = async (term) => {
    try {
      setFetchedNews([]);
      const response = await NewsApi.get(`/everything?q=${term}&pageSize=10`);
      setFetchedNews(response.articles);
    } catch (ex) {
      alert(ex);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await NewsApi.get(
          `/everything?q=${tab}&pageSize=${pageSize}`
        );
        setFetchedNews(response.articles);
      } catch (ex) {
        alert(ex);
      }
    })();
  }, [pageSize]);

  // Useffect for the calender;
  useEffect(() => {
    console.log("useEffect called");
    (async () => {
      try {
        const response = await MarketFxApi.get(
          "/calender/economicCalender/tomorrow"
        );
        setCalender(response.calender);
        console.log(response.calender);
      } catch (ex) {}
    })();
  }, []);
  return (
    <div>
      {/* <Header /> */}

      <h2>Market Overview</h2>
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
        <Right>
          {/* Economic Calender */}

          <Calender>
            {calender
              ? calender.map((cal) => <CalenderDetail calender={cal} />)
              : null}
          </Calender>

          {/* <CalenderDetail /> */}
        </Right>
      </MiniContainer>

      <MiniContainer>
        <Left column={true}>
          {/*  */}
          <TabsContainer>
            <Tab
              active={tab == "economy" ? true : false}
              onClick={() => setTabHandler("economy")}
            >
              All News
            </Tab>
            <Tab
              active={tab == "gold xau" ? true : false}
              onClick={() => setTabHandler("gold xau")}
            >
              Gold News
            </Tab>

            <Tab
              active={tab == "crude oil" ? true : false}
              onClick={() => setTabHandler("crude oil")}
            >
              Crude Oil News
            </Tab>

            <Tab
              active={tab == "forex" ? true : false}
              onClick={() => setTabHandler("forex")}
            >
              Forex News
            </Tab>
          </TabsContainer>

          {fetchedNews
            ? fetchedNews.map((news) => {
                return <NewsComponent news={news} />;
              })
            : null}

          <AppButton
            title={"View More"}
            onClick={() => {
              setPageSize(pageSize + 10);
            }}
          />
        </Left>
        <Right></Right>
      </MiniContainer>

      {/* <AppFooter /> */}
    </div>
  );
};
export default Home;
