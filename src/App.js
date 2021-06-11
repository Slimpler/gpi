import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import EntrarPage from "./pages/EntrarPage";
import PerfilPage from "./pages/PerfilPage";
import ConveniosPage from "./pages/ConveniosPage";
<<<<<<< HEAD
import FuncionariosPage from "./pages/FuncionariosPage";
import FormularioAfiliate from "./pages/FormularioAfiliate";
=======
import AdminPage from "./pages/AdminPage";
import PagosPage from "./pages/PagosPage";
//import PagoConveniosPage from "./pages/PagoConveniosPage";
import PagoAfiliadosPage from "./pages/PagoAfilliadosPage";
import FormularioAfiliate from "./pages/FormularioAfiliate";
import PagoAsociacionPage from "./pages/PagoAsociacionPage";
import PagoBonosPage from "./pages/pagoBonosPage";
import PagoPrestamosPage from "./pages/pagoPrestamosPage";
import Buscarconvenios from './pages/Buscarconvenios';
import BonosAfiliadoPage from './pages/BonosAfiliadoPage';
import PagosUsuarioPage from './pages/PagosUsuarioPage';
import MisConvenios from './pages/MisConvenios';
import Otracosa from "./pages/Otracosa";
import Información from "./pages/Información";
import AdmAfiliados from "./pages/AdmAfiliados";


>>>>>>> e8c355de8f38f8a0a31d568eea598a87fd5192df

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/entrar" component={EntrarPage} exact />
        <Route path="/perfil" component={PerfilPage} exact />
        <Route path="/convenios" component={ConveniosPage} exact />
<<<<<<< HEAD
        <Route path="/funcionarios" component={FuncionariosPage} exact />
        <Route path="/formularioAfiliate" component={FormularioAfiliate} />
=======
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/pagos" component={PagosPage} exact />
        <Route path="/pagoAfiliados" component={PagoAfiliadosPage} exact />
        <Route path="/formularioAfiliate" component={FormularioAfiliate} exact />
        <Route path="/pagoAsociacion" component={PagoAsociacionPage} exact />
        <Route path="/pagoBonos" component={PagoBonosPage} exact />
        <Route path="/pagoPrestamos" component={PagoPrestamosPage} exact />
        <Route path="/buscarconvenios" component={Buscarconvenios} exact />
        <Route path="/bonosAfiliado" component={BonosAfiliadoPage} exact />
        <Route path="/pagosUsuario" component={PagosUsuarioPage} exact />
        <Route path="/AdmAfiliados" component={AdmAfiliados} exact />
        <Route path='/buscarconvenios' component={Buscarconvenios} exact />
        <Route path='/MisConvenios' component={MisConvenios} exact />
        <Route path='/otracosa' component={Otracosa} />
        <Route path="/Información" component={Información} exact />


>>>>>>> e8c355de8f38f8a0a31d568eea598a87fd5192df
      </Switch>
    </Router>
  );
}

export default App;
