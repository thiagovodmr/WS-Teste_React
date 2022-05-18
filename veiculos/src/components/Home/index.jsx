import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Home(){
    return (
        <div className="container">
            <h1>Hello World</h1>
            <Link className="button btn btn-primary" to="/listagem">Ver Lista Completa</Link>
        </div>
    )
}

export default Home;