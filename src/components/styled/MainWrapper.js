import styled from 'styled-components';
import Queen_bg from '../styled/Queen-bg.jpg';

export const BodyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #2d2b28;
  background: url(${Queen_bg}) no-repeat center fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

export const AlbumsWrapper = styled.li`
  display: flex;
  align-content: space-around;
  justify-content: flex-start;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-around;
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

export const SearchInput = styled.input`
  background: #fff;
  color: #333;
  padding: 0.4rem 1.3rem;
  border: #ff5733 solid 2px;
  border-radius: 15px;
`;

export const ContentWrapper = styled.div`
  height: 60vh;
  overflow: auto;
  padding: 5%;
  margin: 35% 10% 20% 10%;
  background-color: rgba(241, 168, 63, 0.8);
  border-radius: 50px 20px;
`;
