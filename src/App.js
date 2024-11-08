import React, { Component, Fragment, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Header />
            
            <Footer />
          </Route>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Switch>
    </Router>

  );
}

export default App;
