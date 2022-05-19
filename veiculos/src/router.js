import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/index.jsx"; 
import PageList from "./components/PageList/index.jsx";
import NovoCarro from "./components/NovoCarro/index.jsx";
import AtualizarCarro from "./components/AtualizarCarro/index.jsx";
import ConfirmarDeleteCarro from "./components/ConfirmarDeleteCarro/index.jsx";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/carro/novo" element={<NovoCarro/>} />
                <Route exact path="/carro/atualizar/:carroId" element={<AtualizarCarro />} />
                <Route exact path="/carro/remover/:carroId" element={<ConfirmarDeleteCarro />} />
                <Route exact path="/listagem" element={<PageList/>}/>
            </Routes>
        </BrowserRouter>
    )
}