import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './GlobalComponents/Navbar';
import Footer from './GlobalComponents/Footer';
import Home from './HomeComponents/Home';
import About from './AboutComponents/About';
import Events from './EventComponents/Events';
import EventList from './EventComponents/eventlist'
import SingleEvent from './EventComponents/singleeventt'
import Contact from './Contact';
import Gallery from './Gallery';


const App=() => {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Switch />
        <Route path = "/" exact component={Home} />
        <Route path = "/Events" exact component={Events} />
        <Route path = "/About" exact component={About} />
        <Route path = "/Contact" exact component={Contact} />
        <Route path = "/Gallery" exact component={Gallery} />
        <Route exact path="/test" component={EventList}></Route>
        <Route exact path="/single/:postid" render={props=> (
          <SingleEvent {...props} />
        )}></Route>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
