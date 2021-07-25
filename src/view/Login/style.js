import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../assets/Background.jpeg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  display: flex;
  background: url(${Background});
  color: #fff;


  form {
    width: 100%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 23%;
    

    input {
      margin-bottom: 10px;
      width: 600px;
      height: 20px;
      border-radius: 10px;
      border: 0;
      padding: 5px;
      text-align: center;
    }

    button {
      width: 610px;
      height: 30px;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
      background-color: #eeeeee;
      color: #334257;
      text-align: center;
      font-weight: 800;
      cursor: pointer;
      &:hover {
        background: darkblue;
        color: #eeeeee;
        border: 1px solid #eeeeee;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
  margin-top: 30px;
  background-color: #eeeeee;
  color: #334257;
  width: 300px;
  height: auto;
  padding: 5px;
  margin-left: 145px;
  text-align: center;
  border-radius: 5px;
  font-weight: 800;
  &:hover {
    background: darkblue;
    color: #eeeeee;
    border: 1px solid #eeeeee;
    transition: 0.5s ease-in-out;
  }
`;
