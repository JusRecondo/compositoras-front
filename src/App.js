import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Home from './components/home/home';
import Profiles from './components/profiles/profiles';
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';

function App() {

  const [ heading, setHeading ] = useState( 'Pioneras en música electroacústica' );

  return (
    <BrowserRouter>
      <Navbar/>
      <Header heading={ heading }/>
      <Switch>
        <Route exact path="/">
          <Home setHeading={ setHeading }/>
        </Route>  
        <Route exact path="/compositoras">
          <Profiles setHeading={ setHeading }/>
        </Route>
        <Route exact path="/:id">
          <Profile setHeading={ setHeading }/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
