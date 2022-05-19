import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";
import {useNavigate, Link} from "react-router-dom";

function NovoCarro(){
    
    const [modeloId, setModeloId] = useState(null);  
    const [ano, setAno] = useState(0);
    const [numPortas, setNumPortas] = useState(0);
    const [cor, setCor] = useState("");
    const [combustivel, setCombustivel] = useState("")

    const [modelos, setModelos] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        api.get("/modelos")
        .then(response=> { setModelos(response.data); })
    }, [])

    async function cadastrarCarro(event){
        event.preventDefault();
        const data = {
            "modeloId": parseInt(modeloId),
            "ano": parseInt(ano),
            "numPortas": parseInt(numPortas),
            "cor": cor,
            "combustivel": combustivel
        }
        
        await api.post('carros',data)
        .then(() => navigate("/listagem"))
        .catch(error => console.log(error))
    }

    return (
        <div className="container form-cadastro">
            <h1 className="text-center">Cadastrar veículo</h1>

            <form className="form-group" onSubmit={cadastrarCarro}>
                <label>Modelo</label><br/>
                <select name="modeloId" className="form-control" onChange={e => setModeloId(e.target.value) }>
                    <option key={0} value="0">Selecione</option>
                    {modelos.map( modelo => (
                        <option key={modelo.id} value={modelo.id}>{modelo.nome}</option>
                    ))}
                </select>

                <label>Ano</label><br/>
                <input type="number" className="form-control" name="ano" onChange={e => setAno(e.target.value) }/>

                <label>Numero de portas</label><br/>
                <input type="number" className="form-control" name="numPortas" onChange={e=> setNumPortas(e.target.value) }/>

                <label>Cor</label><br/>
                <input type="text" className="form-control" name="cor" onChange={e=> setCor(e.target.value) }/>

                <label>Combustivel</label><br/> 
                <input type="text" className="form-control" name="combustivel" onChange={ e => setCombustivel(e.target.value) }/>

                 <div className="btns">
                    <button className="btn btn-success mt-2" type="submit">
                        Cadastrar
                    </button>
                    <Link className="btn btn-primary mt-2 ms-2" to="/listagem">Voltar</Link>
                </div>       
            </form>
        </div>
    )
}

export default NovoCarro;