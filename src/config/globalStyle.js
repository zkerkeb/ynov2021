import { createGlobalStyle } from 'styled-components'
import { RobotoBold, RobotoRegular } from '../assets/fonts/roboto'

const GlobalStyle = createGlobalStyle`
    @font-face {
     font-family: 'Roboto';
     src: url(${RobotoRegular}) format("truetype");
     font-weight: normal;
     font-style: normal;
  };
 @font-face {
     font-family: 'Roboto';
     src: url(${RobotoBold}) format("truetype");
     font-weight: bold;
     font-style: normal;
  };
body{
    background-color: #222222;
    /* overscroll-behavior: none; */
}

p{
    font-family: 'Roboto';
    color: #ffffff;
}

`

export default GlobalStyle