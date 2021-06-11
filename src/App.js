import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import EntrarPage from "./pages/EntrarPage";
import PerfilPage from "./pages/PerfilPage";
import ConveniosPage from "./pages/ConveniosPage";
import AdminPage from "./pages/AdminPage";
import PagosPage from "./pages/PagosPage";
<<<<<<< HEAD
import PagoConveniosPage from "./pages/PagoConveniosPage";
import adminPage from "./pages/AdminPage";
=======
import PagoAfiliadosPage from "./pages/PagoAfilliadosPage";
>>>>>>> 096f7ca2fffd7b18b80654e65af02048580e5d2d
import FormularioAfiliate from "./pages/FormularioAfiliate";
import PagoAsociacionPage from "./pages/PagoAsociacionPage";
import PagoBonosPage from "./pages/pagoBonosPage";
import PagoPrestamosPage from "./pages/pagoPrestamosPage";
import Buscarconvenios from './pages/Buscarconvenios';
import MisConvenios from './pages/MisConvenios';
import Otracosa from "./pages/Otracosa";
import Información from "./pages/Información";
import AdmAfiliados from "./pages/AdmAfiliados";



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/entrar" component={EntrarPage} exact />
        <Route path="/perfil" component={PerfilPage} exact />
        <Route path="/convenios" component={ConveniosPage} exact />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/pagos" component={PagosPage} exact />
<<<<<<< HEAD
        <Route path="/pagoConvenios" component={PagoConveniosPage} exact />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/formularioAfiliate" component={FormularioAfiliate} />
        <Route path='/buscarconvenios' component={Buscarconvenios} />
=======
        <Route path="/pagoAfiliados" component={PagoAfiliadosPage} exact />
        <Route path="/formularioAfiliate" component={FormularioAfiliate} exact />
        <Route path="/pagoAsociacion" component={PagoAsociacionPage} exact />
        <Route path="/pagoBonos" component={PagoBonosPage} exact />
        <Route path="/pagoPrestamos" component={PagoPrestamosPage} exact />
        <Route path="/AdmAfiliados" component={AdmAfiliados} exact />

        <Route path='/buscarconvenios' component={Buscarconvenios} exact />
        <Route path='/MisConvenios' component={MisConvenios} exact />
        <Route path='/otracosa' component={Otracosa} />
        <Route path="/Información" component={Información} exact />


>>>>>>> 096f7ca2fffd7b18b80654e65af02048580e5d2d
      </Switch>
    </Router>
  );
}

export default App;
