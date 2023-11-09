// @ts-nocheck
import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc"; // editando icones personalizado
import { CiEdit } from "react-icons/ci";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(https://source.unsplash.com/1600x900/?landscape&_gl=1*7ad761*_ga*MTI3Njc3NjAxNy4xNjc1NDc2MDk3*_ga_37GXT4VGQK*MTY4OTgxNjMwOC4xNjEuMS4xNjg5ODE2NDA1LjAuMC4w);
  background-size: cover;
`;

export const List = styled.div`
  background: #030328;
  padding: 30px 20px;
  border-radius: 20px;
  height: 90vh;
  overflow-y: auto;

  ul {
    padding: 0;
    margin-top: 60px;
  }

  h3 {
    color: #ffffff;
    text-align: center;
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
    opacity: 0.8;
  }
`;

export const Li = styled.li`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

export const Ul = styled.ul`
  text-align: center;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  border-radius: 5px;
  background: ${(props) => (props.isFinished ? "#008000" : "#e4e4e4")};
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
  height: 70px;
  margin-bottom: 30px;
  padding: 0 20px;

  li {
    list-style: none;
    color: ${(props) => (props.isFinished ? "#ffffff" : "#000000")};
    font-size: 15px;
    text-decoration: ${(props) =>
      props.isFinished ? "line-through" : "#e4e4e4"};
    display: block;
    position: sticky;
    text-align: right;
    right: 48%;
  }
`;
// editando icones personalizado,não elementos nativos e por isso fazemos dessa maneira
export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
  font-size: 2em;
`;
export const Check = styled(FcCheckmark)`
  position: sticky;
  right: 90%;

  cursor: pointer;
  font-size: 2em;
`;
export const Edit = styled(CiEdit)`
  cursor: pointer;
  font-size: 2em;
`;
