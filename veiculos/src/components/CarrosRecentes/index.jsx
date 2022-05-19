import React, { useState, useEffect } from "react";
import api from "../../services/api";
import ListaCompletaCarros from "../ListaCompletaCarros";
import "./styles.css";

function CarrosRecentes(){
    const [carrosRecentes, setCarrosRecentes] = useState([]);

    useEffect(()=>{
        api.get("/")
        .then(response=> { 
            const data  = response.data;
            data.sort((a,b)=> new Date(a.timestamp_cadastro) - new Date(b.timestamp_cadastro)).reverse()
            const carros = data.slice(0,5);
            setCarrosRecentes(carros);

        }).catch(error => console.log(error))
      },[])


    return (
        <div>
            <h1>Novos Carros</h1>
            <ListaCompletaCarros carros={carrosRecentes}/>
        </div>
    )
}

export default CarrosRecentes;