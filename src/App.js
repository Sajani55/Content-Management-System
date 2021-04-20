import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Footer from './Footer';
import Home from './HomeComponents/Home';
import Navbar from './Navbar';
import Events from './EventComponents/Events';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import EventList from './EventComponents/eventlist'
import SingleEvent from './EventComponents/singleeventt'


function App() {
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
