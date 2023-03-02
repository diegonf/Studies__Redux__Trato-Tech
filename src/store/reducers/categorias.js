import categoriasService from 'services/categorias';
import { createStandaloneToast } from '@chakra-ui/toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { resetarCarrinho } from './carrinho';
import { cadastrarItem } from './itens';

const { toast } = createStandaloneToast();
const initialState = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        buscarCategorias.fulfilled,
        (state, { payload }) => {
          toast({
            title: 'Sucesso!',
            description: 'Categorias carregadas com sucesso',
            status: 'success',
            duration: 2000,
            isClosable: true
          })
          return payload;
        }
      )
      .addCase(
        buscarCategorias.pending,
        () => {
          toast({
            title: 'Carregando!',
            description: 'Carregando categorias',
            status: 'loading',
            duration: 2000,
            isClosable: true
          })
        }
      )
      .addCase(
        buscarCategorias.rejected,
        () => {
          toast({
            title: 'Erro!',
            description: 'Erro na busca de categorias',
            status: 'error',
            duration: 2000,
            isClosable: true
          })
        }
      )
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

export default categoriasSlice.reducer;