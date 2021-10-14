import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  
  import Login from '../screens/login'
  import Characters from '../screens/characters'
import Navigation from "../components/navigation";


  const Routes = () => {
      return(
          <Router>
              <Navigation/>
              <Switch>
                  <Route exact path="/">
                      <Login></Login>
                  </Route>
                  <Route path="/characters">
                      <Characters></Characters>
                  </Route>
                  <Redirect  to="/"></Redirect>
              </Switch>
          </Router>
      )
  }

  export default Routes;