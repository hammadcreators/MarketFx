import React from 'react'
import styled from "styled-components";

const NewsDatacontainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Impact = styled.div`
flex: 1;

`

const Name = styled.div`
  flex: 1;

`

const Actual = styled.div`
  flex: 1 ;

`

const Previous = styled.div`
  flex: 1;

`

const NewsData = ({news}) => {
    return (

      <NewsDatacontainer>
        <Impact>
          Low
        </Impact>
        <Name>
        Wholesale Prices MoM (FEB)
        </Name>
        <Actual>
          Actual
          0.1%
        </Actual>
        <Previous>
        Previous:
        0.2%
        </Previous>
      </NewsDatacontainer>


        
    )
}

export default NewsData