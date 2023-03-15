// import instance from 'common/config/api';

// using the db.json
import data from './db.json';


const itensService = {
  buscar: async () => {
    // const resposta = await instance.get('/itens');
    // return resposta.data;

    //using the db.json file
    const resposta = data.itens;
    return resposta;
  },
  buscarDeCategoria: async (nomeCategoria) => {
    // const resposta = await instance.get(`/itens?categoria=${nomeCategoria}`);
    // return resposta.data;

    //using the db.json file
    const resposta = data.itens.filter(item => item.categoria === nomeCategoria);
    return resposta;


  }
}

export default itensService;