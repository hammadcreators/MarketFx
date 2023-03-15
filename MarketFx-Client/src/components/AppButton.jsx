import React from "react";
import styled from "styled-components";


import rightArrow from "../assets/images/right-arrow.png"
const ButtonContainer = styled.a`
  background: #e1e1e1;
  color: #000;
  border-color: 1px solid #e1e1e1;
  width: max-content;
  text-decoration: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  font-weight: 550;
  &:hover {
    color: #000;
    background: #fafafa;
    border-color: #e1e1e1;
  }
  
`;


const RightArrow= styled.img`
  width: 10px;
  margin-left: 10px;
`;
const AppButton = () => {
  return <ButtonContainer>View All

    <RightArrow src={rightArrow} />
  </ButtonContainer>;
};

export default AppButton;
