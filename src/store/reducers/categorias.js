import categoriasService from 'services/categorias';
import { createStandaloneToast } from '@chakra-ui/toast';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { resetarCarrinho } from './carrinho';
import { cadastrarItem } from './itens';

const { toast } = createStandaloneToast();
const initialState = [];

export const carregarCategorias = createAction('categorias/carregarCategorias');
export const carregarUmaCategoria = createAction('categoria/carregarUmaCategoria');

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarTodasAsCategorias: (state, { payload }) => {
      return payload;
    },
    adicionarUmaCategoria: (state, { payload }) => {
      state.push(payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(
        resetarCarrinho.type,
        () => {
          toast({
            title: 'Sucesso!',
            description: 'Compra completada com sucesso!',
            status: 'success',
            duration: 2000,
            isClosable: true
          })
        }
      )
      .addCase(
        cadastrarItem.type,
        () => {
          toast({
            title: 'Sucesso!',
            description: 'Item cadastrado com sucesso!',
            status: 'success',
            duration: 2000,
            isClosable: true
          })
        }
      )
  }
});

export const { adicionarTodasAsCategorias, adicionarUmaCategoria } = categoriasSlice.actions;
export default categoriasSlice.reducer;