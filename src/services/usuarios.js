// import instance from 'common/config/api';

// using the db.json
import data from './db.json';

const usuariosService = {
  buscarPorId: async (id) => {
    // const resposta = await instance.get(`/usuarios/${id}`);
    // return resposta.data;

    //using the db.json file
    const resposta = data.usuarios.find(usuario => usuario.id === id);
    return resposta;
  }
};

export default usuariosService;