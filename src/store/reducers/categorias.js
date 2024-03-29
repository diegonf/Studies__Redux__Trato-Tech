import { createStandaloneToast } from '@chakra-ui/toast';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { cadastrarItem } from './itens';

const { toast } = createStandaloneToast();
const initialState = [];

export const carregarCategorias = createAction('categorias/carregarCategorias');
export const carregarUmaCategoria = createAction('categoria/carregarUmaCategoria');


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