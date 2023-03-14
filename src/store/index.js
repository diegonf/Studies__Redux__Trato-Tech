import { configureStore } from '@reduxjs/toolkit';
import { categoriasListener } from './middlewares/categorias';
import { itensListener } from './middlewares/itens';
import { categoriasSaga } from './sagas/categorias';
import { carrinhoSaga } from './sagas/carrinho';
import { all } from 'redux-saga/effects';
import buscaSlice from './reducers/busca'
import carrinhoSlice from './reducers/carrinho';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import usuarioSlice from './reducers/usuario';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice,
    usuario: usuarioSlice,
  },
  middleware:
    getDefaultMiddleware =>
      getDefaultMiddleware().prepend(
        categoriasListener.middleware,
        itensListener.middleware,
        sagaMiddleware
      ),
});

// concatenando os sagas
function* rootSaga() {
  yield all([
    categoriasSaga(),
    carrinhoSaga()
  ]);
};
sagaMiddleware.run(rootSaga);

// chamando cada saga separadamente
// sagaMiddleware.run(categoriasSaga);
// sagaMiddleware.run(carrinhoSaga);

export default store;