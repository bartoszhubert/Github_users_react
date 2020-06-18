import React from 'react';
import { Provider } from "react-redux";
import store from "../../store";

import SearchBox from '../SearchBox';
import UserAccordion from '../UsersAccordion';

import './App.css';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <SearchBox />
        <UserAccordion />
      </Provider>
    </div>
  );
}

export default App;
