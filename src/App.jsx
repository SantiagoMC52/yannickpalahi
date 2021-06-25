import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/aboutme" component={Aboutme} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
