import React from 'react';
import styled from 'styled-components'
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'


const AppWrapper = styled.div`
  background: var(--grayDark);
 
  @media(max-width: 800px){
    padding-top: 20px;
  }
`

function Home() {
  return (
    <AppWrapper >
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Yvonne Lara da Costa, mais conhecida como Dona Ivone Lara, foi uma cantora e compositora brasileira. Conhecida como Rainha do Samba e Grande Dama do Samba ela foi a primeira mulher a assinar um samba-enredo e a fazer parte da ala de compositores de uma escola, a Império Serrano."}
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

      <Footer/>

      
    </AppWrapper>
  );
}

export default Home;