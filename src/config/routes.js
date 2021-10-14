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
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from './themes'
import { useState } from "react";


  const Routes = () => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme)
     const switchTheme = (theme) => {
        setCurrentTheme(theme)
     } 
      return(
    <ThemeProvider theme={currentTheme}>
          <Router>
              <button onClick={() =>switchTheme(lightTheme)}> light Theme</button>
              <button onClick={() =>switchTheme(darkTheme)}> dark Theme</button>
              {/* <Navigation/> */}
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
      </ThemeProvider>

      )
  }

  export default Routes;