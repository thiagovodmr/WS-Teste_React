import React, {useState, useEffect} from "react";
import api from "../../services/api";
import "./styles.css";
import ListaCompletaCarros from "../ListaCompletaCarros"

function CarrosAntigos(){

    const [carrosAntigos, setCarrosAntigos] = useState([]);

    useEffect(()=>{
        api.get("/")
        .then(response=> { 
            const data  = response.data;
            const carrosAntigos = data.filter(carro => {
                if(carro.ano < 2005){
                    return true;
                }else{
                    return false;
                }
            });

            setCarrosAntigos(carrosAntigos);

        }).catch(error => console.log(error))
      },[])


    return (
       <div>
           <h1>Carros Antigos</h1>
           <div className="carros-antigos-lista">
                <ListaCompletaCarros carros={carrosAntigos} />
           </div>
       </div> 

    )
}

export default CarrosAntigos;