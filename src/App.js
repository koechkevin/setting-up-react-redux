import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routing';
import store from './redux/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
