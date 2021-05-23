import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/SigninPage";
import ConveniosPage from "./pages/ConveniosPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/convenios" component={ConveniosPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
