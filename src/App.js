import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import Home from './components/layout/Home';
import AlbumDetails from './components/albums/AlbumDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path={`/album/:artistName/:albumName`}>
            <AlbumDetails />
          </Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
