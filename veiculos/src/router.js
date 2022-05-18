import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/index.jsx"; 
import PageList from "./components/PageList/index.jsx";
import NovoCarro from "./components/NovoCarro/index.jsx";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/carro/novo/:alunoId" element={<NovoCarro/>} />
                <Route exact path="/listagem" element={<PageList/>}/>
            </Routes>
        </BrowserRouter>
    )
}