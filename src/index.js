import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Videor';
import CadastroCategoria from './pages/cadastro/Categoria';



// Desafio master blaster na descrição
const Pagina404 = () => (<div> Not Found
     <img src="https://images.tcdn.com.br/img/img_prod/731014/pin_icebrg_zeca_pagodinho_113_1_20200507002900.png" />
     </div>)

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