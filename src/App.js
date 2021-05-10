import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./GlobalComponents/Navbar";
import Footer from "./GlobalComponents/Footer";
import Home from "./HomeComponents/Home";
import About from "./AboutComponents/About";
import Events from "./EventComponents/Events";
import SingleEvent from "./EventComponents/singleeventt";
import SingleCourse from "./CourseComponents/SingleCourse";
import Contact from "./Contact";
import Gallery from "./GalleryComponents/Gallery";
import SimpleReactLightbox from "simple-react-lightbox";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch />
        <Route path="/" exact component={Home} />
        <Route path="/Events" exact component={Events} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <SimpleReactLightbox>
          <Route path="/Gallery" exact component={Gallery} />
        </SimpleReactLightbox>
        <Route
          exact
          path="/single/:postid"
          render={(props) => <SingleEvent {...props} />}
        ></Route>
        <Route path="/SingleCourse" exact component={SingleCourse}></Route>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
