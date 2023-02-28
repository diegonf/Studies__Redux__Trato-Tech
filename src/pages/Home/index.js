import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buscarCategorias } from 'store/reducers/categorias';
import { buscarItens } from 'store/reducers/itens';
import relogio from 'assets/inicial.png'
import styles from './Home.module.scss';
import Header from 'components/Header';
import Button from 'components/Button';


export default function Home() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const categorias = useSelector(state => state.categorias);

  useEffect(() => {
    dispatch(buscarCategorias());
    dispatch(buscarItens());
  }, [dispatch]);

  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        imagem={relogio}
        className={styles.header}
      >
        <Button onClick={() => nav('/anuncie')}>
          Quero Anunciar!
        </Button>
      </Header>
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => nav(`/categorias/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.name} />
              <h1>{categoria.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}