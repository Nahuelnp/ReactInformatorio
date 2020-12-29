import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Inicio from "./components/inicio.jsx";
import Nosotros from "./components/nosotros.jsx";
import Users from "./components/Users.jsx";



function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm  navBar navbar-dark">
        <button className="navbar-toggler  " type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse liColor justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link navbar-brand" activeClassName="active">
                INICIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link navbar-brand" activeClassName="active">
                NOTICIAS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="jumbotron jumbotron-fluid navBar ">
        <div className="container text-center text-light">
          <h1 className="display-4"><strong> Bla Bla Bla </strong></h1>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa sapiente recusandae ratione doloribus dolor? Perferendis, repudiandae. </p>
        </div>
      </div>
      <div className="container bg-light">
        <Switch >
          <Route path="/nosotros/:id">
            <Users />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
