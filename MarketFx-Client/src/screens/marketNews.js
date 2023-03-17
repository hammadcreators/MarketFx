import styled from "styled-components";
import NewsComponent from "../components/NewsComponent";
import AppButton from "../components/AppButton";
import AppFooter from "../components/AppFooter";
import { useEffect, useState } from "react";
import { NewsApi } from "../Api/NewsApi";
import Header from "../components/Header";


const Container = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  width: 70%;
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
const TabsContainer = styled.div`
  margin: 20px  0px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  height: max-content;
`;



  
const MarketNews = () => {

  const [fetchedNews, setFetchedNews] = useState([]);
  const [tab, setTab] = useState("economy");


  const setTabHandler = async (tab) => {
    setTab(tab);
    await fetchNews(tab)
  }


  const fetchNews = async (term) => {
    try {
      setFetchedNews([]);
      const response = await NewsApi.get(`/everything?q=${term}&pageSize=10`);
      setFetchedNews(response.articles);
    } catch (ex) {
      alert(ex)
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await NewsApi.get(`/everything?q=economy&pageSize=10`);
        setFetchedNews(response.articles);
      } catch (ex) {
        alert(ex)
      }
    })();
  }, [])
    return (
      
        <div>
          <Header/>
          <Container>
          <h2>Market News</h2>

          <Left column={true}>

            {/*  */}
            <TabsContainer>
              <Tab active={tab == "economy" ? true : false} onClick={() => setTabHandler("economy")}>All News</Tab>
              <Tab active={tab == "gold" ? true : false} onClick={() => setTabHandler("gold")}>Gold News</Tab>

              <Tab active={tab == "crude oil" ? true : false} onClick={() => setTabHandler("crude oil")}>Crude Oil News</Tab>

              <Tab active={tab == "forex" ? true : false} onClick={() => setTabHandler("forex")}>Forex News</Tab>
            </TabsContainer>


            {fetchedNews ?

              fetchedNews.map((news) => {
                return <NewsComponent news={news} />;
              })

              : null}

            <AppButton />
          </Left>

          </Container>
          <AppFooter/>
        </div>
        
    );
  };
  
  export default MarketNews;
  