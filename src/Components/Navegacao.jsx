import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import * as S from "./Style.jsx"

function Navegacao() {
    return (
      <BrowserRouter>
      <S.Navegacao>
        <S.Lista>
            <li> <Link to="/"> Início </Link> </li>
            <li> <Link to="/Sobre"> Sobre </Link> </li>
            <li> <Link to="/Projetos"> Projetos </Link></li>
        </S.Lista>
        </S.Navegacao>
  
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="Sobre" element = { <Sobre /> } />
          <Route path="Projetos" element = { <Projetos /> } />  
        </Routes>
  
      </BrowserRouter>
      
    )
  }

export default Navegacao
  