import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

const criarTarefa = async ({
  action,
  textoCaregando,
  textoErro,
  textoSucesso,
  busca,
  dispatch,
  fork,
}) => {
  toast({
    title: 'Carregando!',
    description: textoCaregando,
    status: 'loading',
    duration: 1000,
    isClosable: true
  });
  const tarefa = fork(async api => {
    await api.delay(1000);
    return await busca();
  });

  const resposta = await tarefa.result;
  if (resposta.status === 'ok') {
    toast({
      title: 'Sucesso!',
      description: textoSucesso,
      status: 'success',
      duration: 2000,
      isClosable: true
    });
    dispatch(action(resposta.value));
  }

  if (resposta.status === 'rejected') {
    toast({
      title: 'Erro!',
      description: textoErro,
      status: 'error',
      duration: 2000,
      isClosable: true
    });
  }

  return resposta;
};

export default criarTarefa;