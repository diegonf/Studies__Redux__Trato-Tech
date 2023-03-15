// import instance from 'common/config/api';

// using the db.json
import data from './db.json';

const cartoesService = {
  buscarProIdUsuario: async (usuarioId) => {
    // const resposta = await instance.get(`/cartoes?usuarioId=${usuarioId}`);
    // return resposta.data;

    //using the db.json file
    const resposta = data.cartoes.filter(cartao => cartao.usuarioId === usuarioId);
    return resposta;
  }
};
export default cartoesService;