import React from "react";
import Form from "./Form"
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';

function Products() {
    return (
        <>
        <div className="clientsInfo">
        <Link to="/" className="backToGoTo">Voltar para a home</Link>
        <Link to="/clients" className="backToGoTo">Ir para o cadastro de clientes</Link>
        <h1>Cadastre aqui os seus produtos:</h1>
        <Form />
        </div>
      </>
    )
}

export default Products;