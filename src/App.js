import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Main from './components/Main'
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Route path="/" component={Main} />
      </Router>
    </Provider>
  );
}

export default App;
