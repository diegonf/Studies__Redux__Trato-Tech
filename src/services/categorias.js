// import instance from 'common/config/api';

// using the db.json
import data from './db.json';

const categoriasService = {
  buscar: async () => {
    // const resposta = await instance.get('/categorias');
    // return resposta.data;

    //using the db.json file
    const resposta = data.categorias;
    return resposta;
  },
  buscarUmaCategoria: async (nomeCategoria) => {
    // const resposta = await instance.get(`/categorias/${nomeCategoria}`);
    // return resposta.data;

    //using the db.json file
    const resposta = data.categorias.find(categoria => categoria.id === nomeCategoria);
    return resposta;
  },
};

export default categoriasService;