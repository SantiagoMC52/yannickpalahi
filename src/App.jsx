import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/detail/:projectId" component={Detail} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
