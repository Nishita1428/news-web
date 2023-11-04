import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={NewsList} />
          <Route path="/news/:id" component={NewsDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
