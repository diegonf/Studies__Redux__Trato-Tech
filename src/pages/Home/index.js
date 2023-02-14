import relogio from 'assets/inicial.png'
import styles from './Home.module.scss';
import Header from 'components/Header';

export default function Home(){
  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipo de produtos no melhor site do Brasil'
        imagem={relogio}
        className={styles.header}
      />
    </div>
  )
}