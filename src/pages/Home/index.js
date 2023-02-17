import relogio from 'assets/inicial.png'
import styles from './Home.module.scss';
import Header from 'components/Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Home() {
  const nav = useNavigate();
  const categorias = useSelector(state => state.categorias);

  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        imagem={relogio}
        className={styles.header}
      />
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