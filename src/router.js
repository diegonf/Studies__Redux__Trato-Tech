import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "components/PaginaPadrao";
import Categoria from "pages/Categoria";
import Home from "pages/Home";
import Carrinho from "pages/Carrinho";

export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path='/categorias/:nomeCategoria' element={<Categoria/>}/>
          <Route path='/carrinho' element={<Carrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}