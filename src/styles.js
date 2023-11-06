// @ts-nocheck
import styled from "styled-components";

export const Container = styled.div`
  background-image: radial-gradient(
    circle at 44.68% 30.16%,
    #6e7070 0,
    #5c6563 16.67%,
    #455655 33.33%,
    #284444 50%,
    #033335 66.67%,
    #00252a 83.33%,
    #001c23 100%
  );

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  background: #030328;
  padding: 30px 20px;
  border-radius: 20px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  color: #fff;
`;
export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #001c23;

  height: 3em;
  width: 30rem;

  margin: 5px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #b535f6;
  color: #ffffff;
  overflow: hidden;
  transition: all 0.5s ease 0s !important;
  width: 300px !important;
  cursor: pointer;
  height: 3em;

  &:hover {
    background-color: #ffffff;
    color: black;
    text-decoration: none;
  }
`;

export const Li = styled.li`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background: #e4e4e4;
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
  height: 60px;
  margin-bottom: 30px;
  padding: 0 20px;

  li {
    list-style: none;
    color: black;
    font-size: 15px;
  }
`;
