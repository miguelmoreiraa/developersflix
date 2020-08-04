import config from '../config'

const URL_VIDEOS = `${config.URL_CONFIG}/videos`;

function createVideos(objetoDoVideo) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }
            throw new Error('Não foi possível cadastrar os dados :(')
        });
}

function deleteVideos(id) {
    return fetch(`${URL_VIDEOS}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                console.log(resposta);
                return resposta;
            }
            throw new Error('Não foi possível conectar ao servidor :(')
        });
}


export default {
    createVideos,
    deleteVideos,
}





