import React from 'react';
import styled from 'styled-components'
import Menu from '../../../../components/Menu'
import dadosIniciais from '../../../../data/dados_iniciais.json'
import BannerMain from '../../../../components/BannerMain'
import Carousel from '../../../../components/Carousel'
import Footer from '../../../../components/Footer'


const AppWrapper = styled.div`
  background: var(--grayDark);
 
  @media(max-width: 800px){
    padding-top: 20px;
  }
`

function App() {
  return (
    <AppWrapper >
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Angenor de Oliveira, mais conhecido como Cartola, foi um cantor, compositor, poeta e violonista brasileiro"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />


      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      
    </AppWrapper>
  );
}

export default App;