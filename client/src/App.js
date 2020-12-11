import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
// import { Home, Category, Favorite } from './pages'
import { Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <nav>

      </nav>
    </Provider>
  );
}

export default App;
