import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { themes } from './theme';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }

html{
  scroll-behavior: smooth;
}

body{
  margin: 0 0 var(--header-height) 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color:${props => props.theme.bodyColor};
  color:${props => props.theme.textColor};
}

@media screen and (min-width: 768px) {

  body{
    margin: 0;
  }
}


::-webkit-scrollbar{
  width: .60rem;
  background-color: ${props => props.theme.scrollBarColor};
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb{
  background-color: ${props => props.theme.scrollThumbColor};
  border-radius: .5rem;
}
`


function App() {
  const [lightordark,setLightordark] = useState('light')
  return (
    <ThemeProvider theme={themes[lightordark]}>
      <Router>
        <GlobalStyle whiteColor />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;