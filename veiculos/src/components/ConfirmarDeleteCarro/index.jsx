import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

function ConfirmarDeleteCarro(){
    const {carroId} = useParams();

    const navigate = useNavigate();

    async function deleteAluno(){
        await api.delete(`carros/${carroId}`)
        .then(()=> navigate("/listagem"))
        .catch(erro=> console.log(erro));
    }

    return (
        <div className="container confirm-delete-container">
            <h1>Confirmar a exclusão do registro:</h1>
            <p>Tem certeza que deseja deletar o CARRO de Id: <span className="id">{carroId}</span>.</p>
            <div className="btns">
                <button className="btn btn-danger" onClick={deleteAluno}>Deletar</button>
                <Link className="btn btn-primary ms-2" to="/listagem">Cancelar</Link>
            </div>
        </div>
    )
}

export default ConfirmarDeleteCarro;