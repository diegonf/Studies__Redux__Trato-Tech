import instance from 'common/config/api';


const itensService = {
  buscar: async () => {
    const resposta = await instance.get('/itens');

    return resposta.data;
  },
  buscarDeCategoria: async (nomeCategoria) => {
    const resposta = await instance.get(`/itens?categoria=${nomeCategoria}`);

    return resposta.data;
  }
}

export default itensService;