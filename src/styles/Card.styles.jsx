import styled from "styled-components";

export const CardDiv = styled.div`
  width: 350px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
`;

export const ImageDiv = styled.div`
  width: 170px;
  height: 170px;
  margin: auto;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const CardName = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-top: -3px;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

export const CardStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #7d2ae8;
  color: white;
  font-size: 16px;
  font-weight: 400;
  padding: 7px 15px;
  border: 0;
  border-radius: 30px;
  outline: 0;
  cursor: pointer;
`;

// export default CardContainer;
