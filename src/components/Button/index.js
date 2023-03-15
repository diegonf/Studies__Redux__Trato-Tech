import styles from './Button.module.scss';


const Button = ({ disabled, children, type, onClick }) => {
  return(
    <button
      disabled = {disabled} 
      className={styles.button}
      type={type}
      onClick = {onClick}
    >
      {children}
    </button>
  );
}

export default Button;