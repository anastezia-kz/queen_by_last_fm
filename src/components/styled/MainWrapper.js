import styled from 'styled-components';
import Queen_bg from '../styled/Queen-bg.jpg';

export const BodyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #2d2b28;
  background: url(${Queen_bg}) no-repeat center ;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

export const ContentWrapper = styled.div`
  height: 50vh;
  overflow: auto;
  padding: 5%;
  margin: 35% 10% 0 10%;
  background-color: rgba(241, 168, 63, 0.8);
  border-radius: 50px 20px;

`;

export const Button = styled.button`
  display: inline-block;
  background: #fff;
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: #ff5733 solid 3px;
  box-shadow: 5px 5px #888888;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 0.5rem;
  outline: none;
  box-sadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #ffc300;
  }
`;


