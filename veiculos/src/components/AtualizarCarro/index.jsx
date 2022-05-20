import React, { useEffect, useState } from "react";
import "./styles.css"
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

function AtualizarCarro(){
    const {carroId} = useParams();
    const [combustivel, setCombustivel] = useState("");
    const [cor, setCor] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        api.get(`carros/${carroId}`)
        .then(response => {
            setCombustivel(response.data.combustivel);
            setCor(response.data.cor);
        })
    },[carroId])

    async function atualizarCarro(event){
        event.preventDefault();
 
        const data = {
            "cor": cor,
            "combustivel": combustivel
        }

        await api.put(`carros/${carroId}`, data)
        .then(() => navigate("/listagem"))
        .catch(error => {
            const erros = error.response.data.errors
            erros.map((erro)=> alert(erro)); 
        })
    }

    return (
        <div className="container form-atualizar">
            <h1>Atualizar Dados do Carro</h1>
       
            <form className="form-group" onSubmit={atualizarCarro}>
                <label>Tipo de Combustivel</label><br />
                <input type="text" name="combustivel" value={combustivel} className="form-control" onChange={e=>setCombustivel(e.target.value)}/>

                <label>Cor</label><br />
                <input type="text" name="cor" value={cor} className="form-control" onChange={e=>setCor(e.target.value)}/>
                <div className="btns">
                    <button className="btn btn-success mt-2" type="submit">
                        Atualizar
                    </button>
                    <Link className="btn btn-primary mt-2 ms-2" to="/listagem">Voltar</Link>
                </div> 
            </form>
        </div>
        
    )
}

export default AtualizarCarro;