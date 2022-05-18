import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";

function NovoCarro(){
    const {carroId} = useParams();
    
    const [modeloId, setModeloId] = useState(null);  
    const [ano, setAno] = useState(0);
    const [numportas, setNumportas] = useState(0);
    const [cor, setCor] = useState("");
    const [combustivel, setCombustivel] = useState("")

    const [modelos, setModelos] = useState([]);

    useEffect(()=>{
        api.get("/modelos")
        .then(response=> { setModelos(response.data); })
    }, [])

    return (
        <div className="container">
            <h1>{carroId === '0'? "Cadastrar": "Atualizar"} veículo</h1>
            <form className="form-group">
                <label>Modelo</label><br/>
                <select name="modeloId" className="form-control">
                    {modelos.map( modelo => (
                        <option key={modelo.id} value={modelo.id}>{modelo.nome}</option>
                    ))}
                </select>

                <label>Ano</label><br/>
                <input type="number" className="form-control" name="ano" />

                <label>Numero de portas</label><br/>
                <input type="number" className="form-control" name="numPortas" />

                <label>Cor</label><br/>
                <input type="text" className="form-control" name="cor" />

                <label>Combustivel</label><br/> 
                <input type="text" className="form-control" name="combustivel"/>

                <button className="btn btn-primary mt-2" type="submit">
                    {carroId === '0' ?"Cadastrar" : "Atualizar"}
                </button>
            </form>
        </div>
    )
}

export default NovoCarro;