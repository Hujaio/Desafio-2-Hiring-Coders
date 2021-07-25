import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, LinkLogin, Menu, Footer } from "./style";

import ShopCart from "../../assets/cart.png";

import LogoInsta from "../../assets/Logo Instagram.png";

import Logo from "../../assets/Logo.png";

import LogoLimites from "../../assets/LogoLimites.jpeg";

export default function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(cart));
  }, [cart]);

  function handleCart(index) {
    let product = data[index];
    setCart((cart) => [...cart, product]);
  }

  return (
    <Container>
      <Menu>
        <div className="logoli">
          <img
            src={LogoLimites}
            alt="Logo loja"
          />
          <span>Limite Cursos</span>
        </div>
        <div className="cart">
          <img src={ShopCart} alt="Shopcart" />
          <span>( {cart.length} ) Carrinho</span>
          <LinkLogin to="/login">Cadastre-se</LinkLogin>
        </div>
      </Menu>
      <section>
        {data.map((product, index) => (
          <div className="product-content" key={product.id}>
            <img src={product.image} alt="Imagem do produto" />
            <h4>{product.name}</h4>
            <span>{product.model}</span>
            <h5>{product.price}</h5>
            <button onClick={() => handleCart(index)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </section>
      <Footer>
        <div className="Hujaio">
          <p>Site feito por Leonardo P. Felicidade (Hujaio)</p>
          </div>
          <div>
            <a href="https://www.instagram.com/leonardo_hujaio/" title="Instagram" target="_blank">
              <img src={LogoInsta} alt="Logo Instagram" title="Logo Instagram" />
            </a>
            <a href="https://github.com/Hujaio" title="GitHub" target="_blank">
            <img src={Logo} alt="Logo GitHub" title="Logo GitHub" />
            </a>
          </div>
      </Footer>
    </Container>
  );
}
