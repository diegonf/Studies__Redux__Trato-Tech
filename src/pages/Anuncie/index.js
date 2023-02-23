import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { cadastrarItem } from 'store/reducers/itens';
import styles from './Anuncie.module.scss';
import Button from 'components/Button';
import Header from 'components/Header';
import { useParams } from 'react-router-dom';


const Anuncie = () => {
  const dispatch = useDispatch();
  const { nomeCategoria = '' } = useParams();
  const categorias = useSelector(state => state.categorias.map(({ nome, id}) => ({ nome, id })))
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      categoria: nomeCategoria
    }
  });
  const { errors } = formState;
  
  const cadastrar = (data) => {
    dispatch(cadastrarItem(data));
  }


  return (
    <div className={styles.container}>
      <Header 
        titulo='Anuncie aqui!'
        descricao='Anuncie seu produto no melhor site do Brasil!'
      />

      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input 
          {...register('titulo', { required: 'O campo nome é obrigatório' })} 
          placeholder='Nome do produto' 
          alt='nome do produto'
          className={errors.name ? styles['input-erro'] : ''}
        />
        {errors.nome && <span className={styles['mensagem-erro']}> {errors.nome.message} </span>}

        <input 
          {...register('descricao', { required: 'O campo descrição é obrigatório' })} 
          placeholder='Descrição do produto' 
          alt='descrição do produto'
          className={errors.descricao ? styles['input-erro'] : ''}
        />
        {errors.descricao && <span className={styles['mensagem-erro']}> {errors.descricao.message} </span>}

        <input 
          {...register('foto', { required: 'O campo imagem é obrigatório' })} 
          placeholder='URL da imagem do produto' 
          alt='URL da imagem do produto'
          className={errors.imagem ? styles['input-erro'] : ''}
        />
        {errors.imagem && <span className={styles['mensagem-erro']}> {errors.imagem.message} </span>}

        <select  
          {...register('categoria', { required: 'O campo categoria é obrigatório' })}
          disabled={nomeCategoria}
          className={errors.categoria ? styles['input-erro'] : ''}
        >
          <option value='' disabled>Selecione a categoria</option>
          {categorias.map(categoria => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        {errors.categoria && <span className={styles['mensagem-erro']}> {errors.categoria.message} </span>}

        <input 
          {...register('preco', { required: 'O campo preço é obrigatório', valueAsNumber: true })} 
          type='number' 
          placeholder='Preço do produto' 
          className={errors.preco ? styles['input-erro'] : ''}
        />
        {errors.preco && <span className={styles['mensagem-erro']}> {errors.preco.message} </span>}
        
        <Button type='submit'>
          Cadastrar produto
        </Button>
      </form>
    </div>
  );
};

export default Anuncie;

