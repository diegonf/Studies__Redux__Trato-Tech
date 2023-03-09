import { configureStore } from '@reduxjs/toolkit';
import { categoriasListener } from './middlewares/categorias';
import { itensListener } from './middlewares/itens';
import buscaSlice from './reducers/busca'
import carrinhoSlice from './reducers/carrinho';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice
  },
  middleware:
    getDefaultMiddleware =>
      getDefaultMiddleware().prepend(
        categoriasListener.middleware,
        itensListener.middleware,
      ),
});

export default store;