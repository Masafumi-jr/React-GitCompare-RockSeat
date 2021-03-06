import styled from "styled-components";

export const Container = styled.div `
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const Header = styled.header`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 64px;
  }

  strong {
    font-size: 24px;
    margin-top: 10px;
  }

  small{
    font-size: 14px;
    color: #666;
  }
`;

export const Lista = styled.ul`
  list-style: none;


  li {
    font-weight: bold;
    padding: 12px 20px;
    
    &:nth-child(2n -1) {
    background-color: #f5f5f5;
  }
  }

  small {
    font-weight: normal;
    font-size: 12px;
    color: #999;
    font-style: italic;
  }
  

`;