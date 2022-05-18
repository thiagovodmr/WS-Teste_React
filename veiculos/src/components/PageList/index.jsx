import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import api from "../../services/api";
import ListaCompletaCarros from "../ListaCompletaCarros";
import "./styles.css";

function PageList(){
    const [carros, setCarros] = useState([])

    useEffect(()=>{
      api.get("/")
      .then(response=> { setCarros(response.data);
      })
    },[])

    return (
        <div className="container">
            <h2>Listagem de carros com seus modelos e marcas</h2>
            <header>  
              <Link className="btn btn-success" to="/carro/novo/0">Cadastrar novos veículos</Link>  
            </header>
            <ListaCompletaCarros carros={carros}/>
        </div>
    )
}

export default PageList;