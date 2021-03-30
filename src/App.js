import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Hero from './Hero';
import UnivBanner from './UnivBanner';
import RecentEvent from './RecentEvent';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <Hero />
        <UnivBanner/>
        <RecentEvent /> 
        <Footer />
    </div>
  );
}

export default App;
