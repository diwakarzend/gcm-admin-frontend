import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import rootReducer from './RootReducer';
// import { getAuthToken, setAuthorizationToken } from './Utils/common';
import { red, blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blueGrey
  },
});

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(() => {}, composeEnhancer(applyMiddleware(thunk)));
// if (getAuthToken()) {
//   setAuthorizationToken(getAuthToken());
// }

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
  );