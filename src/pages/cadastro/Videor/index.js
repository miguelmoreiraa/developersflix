import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'

function CadastroVideo() {
    const history = useHistory();
    const { handleChange, values } = useForm({
        titulo: 'Video padrão',
        url: 'https://www.youtube.com/watch?v=GLQil3KiZV0',
        categoria: 'Arlindo Cruz'
    });

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                // alert('Vídeo Cadastrado com sucesso!!!')
                videosRepository.createVideos({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1,
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