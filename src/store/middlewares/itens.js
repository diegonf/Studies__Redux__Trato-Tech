import { createListenerMiddleware } from '@reduxjs/toolkit';
import { carregarUmaCategoria } from 'store/reducers/categorias';
import { adicionarItens } from 'store/reducers/itens';
import criarTarefa from './utils/criarTarefa';
import itensService from 'services/itens';


export const itensListener = createListenerMiddleware();

itensListener.startListening({
  actionCreator: carregarUmaCategoria,
  effect: async (action, { dispatch, fork, getState, unsubscribe }) => {
    const { itens } = getState();

    if (itens.length === 25) return unsubscribe();

    const nomeCategoria = action.payload;

    const itensCarregados =itens.some(item => item.categoria === nomeCategoria);

    if(itensCarregados) return;

    await criarTarefa({
      action: adicionarItens,
      textoCaregando: `Carregando itens da categoria ${nomeCategoria}`,
      textoErro: `Erro na busca de itens da categoria ${nomeCategoria}`,
      textoSucesso: `Itens da categoria ${nomeCategoria} carregados com sucesso`,
      busca: () => itensService.buscarDeCategoria(nomeCategoria),
      dispatch,
      fork,
    });
  },
});