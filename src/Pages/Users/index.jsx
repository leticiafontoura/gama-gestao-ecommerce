import React from "react";
import { Link } from "react-router-dom";
import FormClients from "./Form"
import "./index.css";
import GitHubIcon from '@material-ui/icons/GitHub';

function Clients() {
    return (
        <>
        <div className="clientsInfo">
            <Link to="/" className="backToGoTo">Voltar para a home</Link>
            <Link to="/products" className="backToGoTo">Ir para o cadastro de produtos</Link>
            <FormClients />
            
        </div>
        
        </>
    )
}

export default Clients;