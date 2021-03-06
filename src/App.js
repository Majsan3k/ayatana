import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import About from './about/about';
import './App.css';
import Header from './header/header'
import Menu from './menu/menu';
import Offers from './offers/offers';
import Home from './start/home'
import './shared.css'
import Footer from './footer/footer';
import Ayatana from './ayatana/ayatana';
import Contact from './contact/contact';
import Banner from 'react-js-banner';

function App() {
  return (
    <Router>
      <Banner 
        title="OBS! Företaget är för tillfället under en välbehövlig vila. Ta hand om er så hörs vi i framtiden! Namaste"
        css={{marginBottom:"5px"}}
      />
      <div className="App">
        <Header />
        <Menu />
        
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/tjanster" component={Offers}>
          </Route>
          <Route path="/ayatana">
            <Ayatana />
          </Route>
          <Route path="/om-mig">
            <About />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
          
        </Switch>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
