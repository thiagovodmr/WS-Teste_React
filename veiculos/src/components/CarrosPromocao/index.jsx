import React, { useState, useEffect } from "react";
import api from "../../services/api";
import ListaCompletaCarros from "../ListaCompletaCarros";
import "./styles.css";

function CarrosPromocao(){
    const [carros, setCarros] = useState([]);

    useEffect(()=>{
        api.get("/")
        .then(response=> { 
            const data  = response.data;
            data.sort((a,b)=> a.valor_fipe - b.valor_fipe)
            const carrosAntigos = data.slice(0,3);

            setCarros(carrosAntigos);

        }).catch(error => console.log(error))
      },[])

    return (
        <div className="carro-promocao-container">
            <h1>Carros Em promoção</h1>
            <ListaCompletaCarros carros={carros}/>
        </div>
    )
}

export default CarrosPromocao;