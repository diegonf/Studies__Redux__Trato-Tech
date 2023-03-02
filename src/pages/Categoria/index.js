import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { buscarCategorias } from "store/reducers/categorias";
import { buscarItens } from "store/reducers/itens";
import styles from './Categoria.module.scss'
import Header from "components/Header";
import Item from "components/Item";
import Button from "components/Button";

export default function Categoria() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { nomeCategoria } = useParams();

  useEffect(() => {
    dispatch(buscarCategorias());
    dispatch(buscarItens());
  }, [dispatch]);

  const { categoria, itens } = useSelector(state => {
    const regexp = new RegExp(state.busca, 'i');
    return {
      categoria: state.categorias.find(categoria => categoria.id === nomeCategoria) || {},
      itens: state.itens.filter(item => item.categoria === nomeCategoria && item.titulo.match(regexp)),
    }
  });

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      >
        <Button onClick={() => nav(`/anuncie/${nomeCategoria}`)}>
          Quero Anunciar!
        </Button>
      </Header>
      <div className={styles.itens}>
        {itens?.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}