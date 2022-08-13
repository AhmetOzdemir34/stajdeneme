import { useEffect, useState } from 'react';
import './App.css';
import { auth } from './firebase';
import Login from './Login';
import Navbar from './Navbar'
import Anasayfa from './Anasayfa';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <div className='App'>
          {/* <Navbar></Navbar>
      {user ?  <Home /> : <Login />}   */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Anasayfa} /> {/*protected route */}
          <Route  path='/login' component={Login} />
          <Route  path='/create' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
