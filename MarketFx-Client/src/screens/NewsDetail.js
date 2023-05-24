import styled from "styled-components";
import AppFooter from "../components/AppFooter";
import Header from "../components/Header";
import { useLocation } from 'react-router-dom';
import React, {useEffect, useState} from "react";

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

const NewsDetail = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const objectString = queryParams.get('object');
    const myObject = JSON.parse(objectString);
    let [newSentiment, setNewsSentiment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/model/', {
            crossDomain:true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({Sentence: myObject.title})
        })
            .then(async res => {
                if(res.status === 200) {
                    let data = await res.json();
                    setNewsSentiment(data);
                }
            })
    }, []);

    return (
        <div>
            <Container>
                <h2>{myObject.title}</h2>
                <h4>{myObject.publishedAt}</h4>
                <img src={myObject.urlToImage}/>

                <Left column={true}>
                    {myObject.content}
                </Left>
                <p>Sentiment: {newSentiment}</p>
            </Container>
        </div>
    );
};

export default NewsDetail;
