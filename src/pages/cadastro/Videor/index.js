import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import styled from 'styled-components';




function CadastroVideo() {
    return (
        <PageDefault>   
            <h1>Cadastro de Video</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;