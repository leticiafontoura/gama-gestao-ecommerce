import { React } from "react";
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';


function Home() {
  
  return (
    <>
    <div className="homePage">
    <h1>Escolha qual item você quer gerenciar:</h1>
      <Link to="/clients" className="backToGoTo">Clientes</Link>
      <Link to="/products" className="backToGoTo">Produtos</Link>
    </div>
      <footer>
      <p>© 2021 Vinílcola, todos os direitos reservados. Desenvolvido por <a target="_blank" href="https://github.com/leticiafontoura">Letícia Fontoura <GitHubIcon style={{verticalAlign: "sub"}}/></a></p>
      </footer>
      
    </>
  );
}

export default Home;