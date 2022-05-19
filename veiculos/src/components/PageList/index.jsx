import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import api from "../../services/api";
import ListaCompletaCarros from "../ListaCompletaCarros";
import "./styles.css";

function PageList(){
    const [carros, setCarros] = useState([])

    useEffect(()=>{
      api.get("/")
      .then(response=> { 
        const data = response.data;
        data.sort((a,b) => a.marca_id - b.marca_id)
        setCarros(data);
      })
    },[])

    return (
      <div>
         <nav className="navbar navbar-light bg-dark">
              <Link className="logo-home" to="#">Listagem completa de carros</Link>
              <ul className="ul-nav navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link btn btn-primary" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn btn-success" to="/carro/novo">Cadastrar novos veículos</Link>
                </li>
            </ul> 
        </nav>

      
        <div className="container">
            <ListaCompletaCarros carros={carros} exibirAcoes={true}/>
        </div>
      </div>
    )
}

export default PageList;