import { createListenerMiddleware } from '@reduxjs/toolkit';
import { adicionarTodasAsCategorias, adicionarUmaCategoria, carregarCategorias, carregarUmaCategoria } from 'store/reducers/categorias';
import categoriasService from 'services/categorias';
import criarTarefa from './utils/criarTarefa';

export const categoriasListener = createListenerMiddleware();

categoriasListener.startListening({
  actionCreator: carregarCategorias,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    const resposta = await criarTarefa({
      action: adicionarTodasAsCategorias,
      textoCaregando: 'Carregando categorias',
      textoErro: 'Erro na busca de categorias',
      textoSucesso: 'Categorias carregadas com sucesso',
      busca: categoriasService.buscar,
      dispatch,
      fork,
    });
    if(resposta.status === 'ok') unsubscribe();
  }
});


categoriasListener.startListening({
  actionCreator: carregarUmaCategoria,
  effect: async (action, { dispatch, fork, getState, unsubscribe }) => {
    const { categorias }= getState();
    const nomeCategoria = action.payload;
    const categoriaCarregada = categorias.some(categoria => categoria.id === nomeCategoria);

    if(categoriaCarregada) return;
    if(categorias.length === 5) return unsubscribe();

    await criarTarefa({
      action: adicionarUmaCategoria,
      textoCaregando: `Carregando categoria ${nomeCategoria}`,
      textoErro: `Erro na busca da categoria ${nomeCategoria}`,
      textoSucesso: `Categoria ${nomeCategoria} carregada com sucesso!`,
      busca: () => categoriasService.buscarUmaCategoria(nomeCategoria),
      dispatch,
      fork,
    });
  }
});