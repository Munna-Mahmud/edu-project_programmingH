import React from 'react';
import  NotFound  from './Components/NotFound/NotFound';
// import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Course from './Components/Course/Course';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigations/Navigation';
import Footer from './Components/Footer/Footer';
import Admissions from './Components/Admissions/Admissions';

const App = () => {
  return (
    <div>
      <Router> 
        <Navigation/>
        <Switch>
        <Route exact path="/">
          <Home></Home>
          </Route>
        <Route exact path="/home">
          <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/course">
           <Course></Course>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/admissions">
            <Admissions></Admissions>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;