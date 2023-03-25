import styled from "styled-components";

// import "./CurrencyNews.css";
import NewsComponent from "../components/NewsComponent";
import AppButton from "../components/AppButton";

import { useEffect, useState } from "react";
import { NewsApi } from "../Api/NewsApi";

const MiniContainer = styled.div`
  display: flex;
  flex-direction: row;
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

const CurrencyNews = () => {
  const [fetchedNews, setFetchedNews] = useState([]);
  const [tab, setTab] = useState("dollar");
  const [pageSize, setPageSize] = useState(10);

  const setTabHandler = async (tab) => {
    setTab(tab);
    await fetchNews(tab);
  };

  const fetchNews = async (term) => {
    try {
      setFetchedNews([]);
      const response = await NewsApi.get(
        `/everything?q=${tab}&pageSize=${pageSize}`
      );
      setFetchedNews(response.articles);
    } catch (ex) {
      alert(ex);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await NewsApi.get(`/everything?q=dollar&pageSize=10`);
        setFetchedNews(response.articles);
      } catch (ex) {
        alert(ex);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Currency News</h2>

      <MiniContainer>
        <Left column={true}>
          {/*  */}
          <TabsContainer>
            <Tab
              active={tab == "dollar usd" ? true : false}
              onClick={() => setTabHandler("dollar usd")}
            >
              USD
            </Tab>
            <Tab
              active={tab == "pound gbp British pound sterling" ? true : false}
              onClick={() => setTabHandler("pound gbp British pound sterling")}
            >
              GBP
            </Tab>

            <Tab
              active={tab == "Euro Currency" ? true : false}
              onClick={() => setTabHandler("euro EUR")}
            >
              EUR
            </Tab>

            <Tab
              active={tab == "japanese yen JPY" ? true : false}
              onClick={() => setTabHandler("japanese yen JPY")}
            >
              JPY
            </Tab>

            <Tab
              active={tab == "canadian dollar CAD" ? true : false}
              onClick={() => setTabHandler("canadian dollar CAD")}
            >
              CAD
            </Tab>

            <Tab
              active={tab == "new zealand dollar NZD" ? true : false}
              onClick={() => setTabHandler("new zealand dollar NZD")}
            >
              NZD
            </Tab>

            <Tab
              active={tab == "australian dollar" ? true : false}
              onClick={() => setTabHandler("australian dollar")}
            >
              AUD
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
              fetchNews(tab);
            }}
          />
        </Left>
      </MiniContainer>
    </div>
  );
};
export default CurrencyNews;
