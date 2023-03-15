import React from 'react'
import styled from "styled-components";


// For the news component
const NewsContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #eeeff0;
    margin-bottom: 15px;
`;

const NewsImageContainer = styled.div`
    height: 60px;
    flex: 0.3;
`;

const NewsImage = styled.img`
    height: 100%;
`;

const NewsInfo = styled.div`
    flex: 2;
    margin-left: 10px;
`;

const NewsInfoTitle = styled.p`
    color: #3b4859!important;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 0px;
`;


const NewsInfoTime = styled.small`
    font-size: .8rem;
    color: #6f747d!important;
`;


const NewsInfoDescription = styled.p`
    color: #3b4859!important;
    font-size: .8rem;
    margin-bottom: 0px;
`;


const NewsComponent = ({news}) => {
    const {image, title, time, description} = news;
  return (
    <NewsContainer>
        {
            image?   <NewsImageContainer>
            <NewsImage src={image}/>
          </NewsImageContainer>
            : null      
        }
    <NewsInfo>
      <NewsInfoTitle>
        {title}
      </NewsInfoTitle>
      <NewsInfoTime>{time}</NewsInfoTime>
      <NewsInfoDescription>
        {description}
      </NewsInfoDescription>
    </NewsInfo>
  </NewsContainer>
  )
}

export default NewsComponent
