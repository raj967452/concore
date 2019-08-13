import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './scss/app.scss';

import { Footer } from './components/global';
import Header from './components/global/header';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/homepage';
import SamplePage from './pages/samplepage';

library.add(faChevronDown, faChevronLeft, faChevronRight);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sprintzero" component={SamplePage} />
            <Route path="/innovationsquad" component={SamplePage} />
            <Route path="/blog5" component={SamplePage} />
            <Route exact path="/*" component={NotFound} />          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
