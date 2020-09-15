import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useStateValue } from './StateProvider';

import { auth } from './firebase';


function App() {

  const [{ basket }, dispatch] = useStateValue();

  //useeffect, code depeending on condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      
      if (authUser) {
        //logged in 
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      }
      else {
        //not logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });

      }
    });

    return () => {
      unsubscribe();
    };

  }, [])  

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/checkout">

            <Header />
            <Checkout />
            <h1>
              This is the checkout page
            </h1>

          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">

            <Header />
            <Home />


          </Route>

        </Switch>
      </div>

    </Router>

  );
}

export default App;
