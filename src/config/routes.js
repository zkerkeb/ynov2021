import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  
  import Login from '../screens/login'
  import Characters from '../screens/characters'
  import Favorites from '../screens/favorites'
  import Style from '../screens/style'
import Navigation from "../components/navigation";
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from './themes'
import { useState } from "react";
import CharacterDetails from "../screens/characterDetails";
import GlobalStyle from "./globalStyle";
import Evil from "../screens/evil";


  const Routes = () => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme)
     const switchTheme = (theme) => {
        setCurrentTheme(theme)
     } 
      return(
    <ThemeProvider theme={currentTheme}>
        <GlobalStyle/>
          <Router>
              <button onClick={() =>switchTheme(lightTheme)}> light Theme</button>
              <button onClick={() =>switchTheme(darkTheme)}> dark Theme</button>
              {/* <Navigation/> */}
              <Switch>
                  <Route exact path="/">
                      <Login></Login>
                  </Route>
                  <PrivateRoute exact path="/characters">
                      <Characters></Characters>
                  </PrivateRoute>
                  <PrivateRoute path="/characters/:id">
                      <CharacterDetails ></CharacterDetails>
                  </PrivateRoute>
                  <PrivateRoute path="/favorites">
                      <Favorites></Favorites>
                  </PrivateRoute>
                  <PrivateRoute path="/style">
                      <Style></Style>
                  </PrivateRoute>
                  <PrivateRoute path="/evil">
                      <Evil></Evil>
                  </PrivateRoute>
                  <Redirect  to="/"></Redirect>
              </Switch>
          </Router>
      </ThemeProvider>

      )
  }

  function PrivateRoute({ children, ...rest }) {
      const isToken = localStorage.getItem('token')
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isToken? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />)
  }

  export default Routes;