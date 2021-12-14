import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import EntrarPage from "./pages/EntrarPage";
import EntrarPageDirectiva from "./pages/EntrarPageDirectiva";
import PerfilPage from "./pages/PerfilPage";
import AdministrarConvenioFinanciero from "./pages/AdministrarConvenioFinanciero";
import AdministrarConvenioComercial from "./pages/AdministrarConvenioComercial";
import AdministrarConvenioDescuento from "./pages/AdministrarConvenioDescuento";
import AdminPage from "./pages/AdminPage";
import PagosPage from "./pages/PagosPage";
import PagoAfiliadosPage from "./pages/PagoAfilliadosPage";
import FormularioAfiliate from "./pages/FormularioAfiliate";
import PagoAsociacionPage from "./pages/PagoAsociacionPage";
import PagoBonosPage from "./pages/pagoBonosPage";
import PagoDeudasPage from "./pages/PagoDeudasPage";
import FormularioDesafiliacion from "./pages/FormularioDesafiliacion";

import ConvenioAfiliado from "./pages/ConvenioAfiliado";

import BonosAfiliadoPage from "./pages/BonosAfiliadoPage";
import PagosUsuarioPage from "./pages/PagosUsuarioPage";
import MisConvenios from "./pages/MisConvenios";
import AdmAfiliados from "./pages/AdmAfiliados";
import AdministracionAfiliados from "./pages/AdministracionAfiliados";
import Convenios from "./pages/Convenios";
import AdmPostulaciones from "./pages/AdmPostulaciones";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* Pagina Principal */}
        <Route path="/" component={Home} exact />
        <Route
          path="/formularioAfiliate"
          component={FormularioAfiliate}
          exact
        />
        <Route path="/entrar" component={EntrarPage} exact />
        <Route path="/entrarDirectiva" component={EntrarPageDirectiva} exact />
        {/* Paginas del usuario */}
        <Route path="/perfil" component={PerfilPage} exact />
        <Route
          path="/Desafiliacion"
          component={FormularioDesafiliacion}
          exact
        />

        {/*<Route path='/buscarconvenios' component={Buscarconvenios} exact />*/}

        <Route path="/ConvenioAfiliado" component={ConvenioAfiliado} exact />

        <Route path="/MisConvenios" component={MisConvenios} exact />
        <Route path="/pagosUsuario" component={PagosUsuarioPage} exact />
        <Route path="/bonosAfiliado" component={BonosAfiliadoPage} exact />

        {/* Paginas del administrador */}
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/pagos" component={PagosPage} exact />
        <Route path="/pagoAfiliados" component={PagoAfiliadosPage} exact />
        <Route path="/pagoAsociacion" component={PagoAsociacionPage} exact />
        <Route path="/pagoBonos" component={PagoBonosPage} exact />
        <Route path="/pagoDeudas" component={PagoDeudasPage} exact />
        <Route path="/Convenios" component={Convenios} exact />
        <Route
          path="/admFinanciero"
          component={AdministrarConvenioFinanciero}
          exact
        />
        <Route
          path="/admComercial"
          component={AdministrarConvenioComercial}
          exact
        />
        <Route
          path="/admDescuento"
          component={AdministrarConvenioDescuento}
          exact
        />
        <Route path="/AdmAfiliados" component={AdmAfiliados} exact />
        <Route
          path="/AdministracionAfiliados"
          component={AdministracionAfiliados}
          exact
        />
        <Route path="/AdmPostulaciones" component={AdmPostulaciones} exact />
      </Switch>
    </Router>
  );
}

export default App;
