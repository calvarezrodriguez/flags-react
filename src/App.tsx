import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css'
import CountryList from './components/country-list'
import Header from './components/header'
import ActionList from './reducers/action-list'
import reducer from './reducers/reducer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CountryPage from './components/country-page'

const store = createStore(reducer)

function AppRouter() {
  const [darkMode, setDarkMode] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  const changeMedia = (mql: any) => {
    setDarkMode(mql.matches)
  }

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addEventListener('change', () => {
      setDarkMode(mql.matches)
      return changeMedia
    })
  }, [])

  return (
    <main className={mainClass}>
      {/* PROVIDER RECIBE STATE Y ALMACENA */}
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route path="/">
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  )
}

export default AppRouter
