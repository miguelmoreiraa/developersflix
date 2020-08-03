import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handleChange, values } = useForm({
        titulo: 'Video padrão',
        url: 'https://www.youtube.com/watch?v=GLQil3KiZV0',
        categoria: 'Arlindo Cruz'
    });

    useEffect(() => {
        categoriasRepository.getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            });
    }, []);
    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                // alert('Vídeo Cadastrado com sucesso!!!')

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                console.log('categoriaEscolhida', categoriaEscolhida)

                videosRepository.createVideos({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Cadastrou com sucesso!')
                        history.push('/');
                    });
            }}>
                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL do Vídeo"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria do Vídeo"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={
                        categoryTitles
                    }
                />


                <Button type="submit">
                    Cadastrar
                </Button>
            </form>



            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault >
    )
}

export default CadastroVideo;