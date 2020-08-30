import React from "react";
import { Provider } from "react-redux";
import { Action, createStore } from "redux";
import "./App.css";
import CountryList from "./components/country-list";

/* eslint-disable */

const initialState = {
  countryList: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    default: {
      return state;
    }
  }
  return state;
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
