import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import EntrarPage from "./pages/EntrarPage";
import PerfilPage from "./pages/PerfilPage";
import ConveniosPage from "./pages/ConveniosPage";
import FuncionariosPage from "./pages/FuncionariosPage";
import PagosPage from "./pages/PagosPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/entrar" component={EntrarPage} exact />
        <Route path="/perfil" component={PerfilPage} exact />
        <Route path="/convenios" component={ConveniosPage} exact />
        <Route path="/funcionarios" component={FuncionariosPage} exact />
        <Route path="/pagos" component={PagosPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
