import React from 'react';
import { Provider } from "react-redux";
import store from "../../store";

import SearchBox from '../SearchBox';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchBox />
        USERS
      </Provider>
    </div>
  );
}

export default App;
