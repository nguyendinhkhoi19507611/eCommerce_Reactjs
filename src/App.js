import React, { Component, Fragment, useEffect, useState } from 'react';
import './css/App.css';
import { ToastContainer } from 'react-toastify';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import HomePage from './container/Home/HomePage';
import ShopPage from './container/Shop/ShopPage';
import DetailProductPage from './container/DetailProduct/DetailProductPage';
import HomePageAdmin from './container/System/HomePageAdmin';
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
            <HomePage />
            <Footer />
          </Route>
          <Route path="/shop">
            <Header />
            <ShopPage />
            <Footer />
          </Route>
          <Route path="/detail-product/:id">
            <Header />
            <DetailProductPage />
            <Footer />
          </Route>
          <Route path="/admin/" render={() => {
            if (JSON.parse(localStorage.getItem("userData")) && (JSON.parse(localStorage.getItem("userData")).roleId === "R1" || JSON.parse(localStorage.getItem("userData")).roleId === "R4")) {
              return <HomePageAdmin />
            } else return <Redirect to={"/login"} />

          }}>
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
