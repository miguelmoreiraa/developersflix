import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import styled from 'styled-components';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Videor';
import CadastroCategoria from './pages/cadastro/Categoria';
import Footer from './components/Footer';



const Err = styled.nav`
    width: 50%;    
    height: 10vh;
    z-index: 10;
    font-family: 'Courier New', Courier, monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media (max-width: 800px) {
        width: 100%;
  }
`


const Descripition = styled.div`
    z-index: 10;
    font-family: 'Courier New', Courier, monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        width: 100%;
  }
`


const Img = styled.img`
    max-width: 800px;
    max-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale3d(0.7);
    position: relative;
    margin-top: 110px;
    float: left;
    left: 95%;
    bottom:100px;
    @media (max-width: 800px) {
        max-width: 100%;
  }
`


// Desafio master blaster na descrição
const Pagina404 = () =>
    ( <Err> Erro 404
        <Descripition> Esta não é a página que você está procurando
            <Img src="https://images.tcdn.com.br/img/img_prod/731014/pin_icebrg_zeca_pagodinho_113_1_20200507002900.png" />
            </Descripition>
     </Err>
    )



ReactDOM.render(
    < BrowserRouter >
        <Switch>
            < Route path="/" component={Home} exact />
            < Route path="/cadastro/video" component={CadastroVideo} exact />
            < Route path="/cadastro/categoria" component={CadastroCategoria} exact />
            < Route component={Pagina404} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);