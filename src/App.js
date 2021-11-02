import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Home from './components/home/home';
import Profiles from './components/profiles/profiles';
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>  
        <Route exact path="/compositoras">
          <Profiles/>
        </Route>
        <Route exact path="/:id">
          <Profile/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
