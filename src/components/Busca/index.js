import styles from './Busca.module.scss';

export default function Busca() {
  return (
    <div>
      <input
        className={styles.input}
        placeHolder='O que você procura?'
      />
    </div>
  )
}