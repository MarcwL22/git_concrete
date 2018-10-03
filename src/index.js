import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Reducer
import reducers from './reducers';
// Global Assets
import { injectGlobal } from 'styled-components';
// Router
import { Route, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// Containers
import HomeContainer from './containers/home/HomeContainer';
// Variables
import { BREAKPOINTS } from './assets/variables';
// UIComponents
import { Container } from './components';

// GlobalStyle
injectGlobal`
  * {
    margin:0;
    padding:0;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html {
    box-sizing: border-box;
    /* 1rem = 10px, 10px/16px = 62.5% */
    font-size: 62.5%; 
    @media (max-width: ${BREAKPOINTS.tabletPortrait}) {
      font-size: 56.25%;
    }
    @media (max-width: ${BREAKPOINTS.phone}) {
      font-size: 50%;
    }
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    min-height: 100vh;
    background-color: #FAFAFA;
    background: linear-gradient(90deg, #467edc, #2643dc);
  }
`;

const store = createStore(reducers, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <Container>
      <Router>
        <Route exact path={'/'} component={HomeContainer} />
      </Router>
    </Container>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
