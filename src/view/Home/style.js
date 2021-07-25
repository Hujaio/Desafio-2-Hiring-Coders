import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../assets/Background.jpeg";
import Moldura from "../../assets/moldura.jpeg";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  
  section {
    height: auto;
    width: 100%;
    background: url(${Background});
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .product-content {
      display: grid;
      text-align: center;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      margin: 12px;

      img {
        width: 200px;
        height: 200px;
      }

      button {
        border-radius: 5px;
        border: none;
        background-color: #476072;
        color: #eeeeee;
        text-align: center;
        cursor: pointer;
        &:hover {
          background: #eeeeee;
          color: #334257;
          border: 1px solid #334257;
          transition: 0.4s ease-in-out;
        }
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
  background: url(${Moldura});

  .logoli {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size:20px
  }

  img {
    width: 60px;
    height: auto;
    border-radius: 5px;
    padding-left: 15px;
  }


  .cart {
    display: flex;
    align-items: center;
    padding-right: 20px;
    justify-content: center;
    img {
      padding-right: 20px;
    }
  }
`;

export const LinkLogin = styled(Link)`
  width: 120px;
  height: 30px;
  text-decoration: none;
  padding-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  background-color: #eeeeee;
  color: #000;
  text-align: center;
  cursor: pointer;
  font-weight: 800;
  &:hover {
    background: darkblue;
    color: #eeeeee;
    border: 1px solid #eeeeee;
    transition: 0.4s ease-in-out;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background: url(${Moldura});

  img {
    widht: 50px;
    height: 50px;
    border-radius: 6px;
  }

  .Hujaio {
    padding: 5px;
    color: #fff;
  }
`
