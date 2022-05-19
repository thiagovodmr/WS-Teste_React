import { Link } from "react-router-dom";
import "./styles.css";
import CarrosAntigos from "../CarrosAntigos";
import CarrosPromocao from "../CarrosPromocao";
import CarrosRecentes from "../CarrosRecentes";

function Home(){

    return (
        <div className="home-container">
            <nav className="navbar navbar-light bg-dark">
                 <Link className="logo-home" to="/">WS Home</Link>
                 <ul className="ul-nav">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-primary" to="/listagem">Ver listagem completa</Link>
                    </li>
                </ul> 
            </nav>


            <div className="container">    
                <CarrosRecentes></CarrosRecentes>
                <hr />
                <CarrosAntigos></CarrosAntigos>
                <hr/>
                <CarrosPromocao></CarrosPromocao>
            </div>
        </div>
    )
}

export default Home;