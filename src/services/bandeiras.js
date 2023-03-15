// import instance from 'common/config/api';

// using the db.json
import data from './db.json';

const bandeirasService = {
  buscarPorId: async bandeiraIds => {
    // const query = new URLSearchParams();
    // bandeiraIds.forEach(id => query.append('id', id));
    // const resposta = await instance.get(`/bandeiras?${query.toString()}`);
    // return resposta.data;

    //using the db.json file
    const resposta = data.bandeiras.filter(bandeira => bandeiraIds.includes(bandeira.id));
    return resposta;
  }
}

export default bandeirasService;