import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
//import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias'

const AppWrapper = styled.div`
  background: var(--grayDark);
 
  @media(max-width: 800px){
    padding-top: 20px;
  }
`

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);



  useEffect(() => {
    //http://localhost:8080/categorias?_embed=videos
    //Busca da dados
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos)
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Yvonne Lara da Costa, mais conhecida como Dona Ivone Lara, foi uma cantora e compositora brasileira. Conhecida como Rainha do Samba e Grande Dama do Samba ela foi a primeira mulher a assinar um samba-enredo e a fazer parte da ala de compositores de uma escola, a Império Serrano."}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que"
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      /> */}
    </PageDefault>
  );
}


export default Home;