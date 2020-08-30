import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css'
import CountryList from './components/country-list'
import Header from './components/header'
import ActionList from './reducers/action-list'
import reducer from './reducers/reducer'

const store = createStore(reducer)

function App() {
  return (
    //PROVIDER RECIBE STATE Y ALMACENA
    <Provider store={store}>
      <Header />
      <div className="App">
        <ActionList />
        <CountryList />
      </div>
    </Provider>
  )
}

export default App
