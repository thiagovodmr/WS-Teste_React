import React from "react";
import "./styles.css";

function ListaCompletaCarros({carros}){
    return (
        <table className="table table-bordered">
             <thead>
               <tr>
                 <th>Marca</th>
                 <th>Modelo</th>
                 <th>Ano</th>
                 <th>Cor</th>
               </tr>
             </thead>
             <tbody>
                {carros.map(list => (
                    <tr key={list.id}>
                        <td>{list.marca_nome}</td>
                        <td>{list.nome_modelo}</td>
                        <td>{list.ano}</td>
                        <td>{list.cor}</td>
                    </tr>                
                ))}
             </tbody>
            </table>
    )
}

export default ListaCompletaCarros;