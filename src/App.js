import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// routes
import { Routes } from './Routes';

// components
import Header from './components/Headers/Header';

// utils
import { getLinks, setLinks } from './Utils';

// initial dataSource
import { initialDataSource } from './initialDataSource';


/**
 * set initial data sourse to localStorage
 */
(function () {
  if (!getLinks().length) {
    setLinks(initialDataSource)
  }
})();

/**
 * 
 * @returns 
 */
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {Routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

/**
 * 
 * @param {*} route
 * @returns 
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        route.redirectTo ?
          <Redirect to={route.redirectTo} {...props} /> :
          <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
