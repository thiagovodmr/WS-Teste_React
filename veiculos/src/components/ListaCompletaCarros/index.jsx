import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function ListaCompletaCarros({carros, exibirAcoes = false}){
  
    return (
        <table className="table">
             <thead>
               <tr className="tr-classes">
                 <th colSpan="2" className="text-center th-marca">Marca</th>
                 <th colSpan="2" className="text-center th-modelo">Modelo</th>
                 <th colSpan="5" className="text-center th-carro">Carro</th>
               </tr>
               <tr>
                 <th>Id</th>
                 <th>Nome</th>
                 <th>Nome</th>
                 <th>Valor FIPE</th>
                 <th>Id do Carro</th>
                 <th>Ano</th>
                 <th>Cor</th>
                 <th>Tipo de Combustível</th>
                 <th>Numero de portas</th>
                
                 {exibirAcoes &&  <th>Ações</th>}
                  
               </tr>
             </thead>
             <tbody>
                 {carros.length > 0 ? carros.map(list => (
                    <tr key={list.id}>
                        <td>{list.marca_id}</td>
                        <td>{list.marca_nome}</td>
                        <td>{list.nome_modelo}</td>
                        <td>R$ {list.valor_fipe}</td>
                        <td>{list.id}</td>
                        <td>{list.ano}</td>
                        <td>{list.cor}</td>
                        <td>{list.combustivel}</td>
                        <td>{list.num_portas}</td>
                       
                        {exibirAcoes && ( 
                          <td>
                            <Link className="btn btn-primary" to={`/carro/atualizar/${list.id}`}>Atualizar</Link>
                            <Link className="btn btn-danger ms-1" to={`/carro/remover/${list.id}`}>Remover</Link>
                          </td>

                        )}
                       
                    </tr>                
                )) :
                <tr><td className="alert alert-info text-center" colSpan="9">
                  Nenhum registro Encontrado</td>
                </tr>       
                }
             </tbody>
            </table>
    )
}

export default ListaCompletaCarros;