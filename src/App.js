// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Switch for routing
import SignIn from './components/SignIn'; // Import SignIn component
import SignUp from './components/SignUp'; // Import SignUp component
import RedirectedPage from './components/RedirectedPage'; // Import RedirectedPage component
import PlayPage from './components/PlayPage'; // Import PlayPage component

function App() {
  return (
    <Router>
      <Switch> {/* Use Switch for routing */}
        <Route exact path="/" component={SignIn} /> {/* Root route for SignIn */}
        <Route path="/signup" component={SignUp} /> {/* Route for SignUp */}
        <Route path="/redirect" component={RedirectedPage.js} /> {/* Route for Redirected Page */}
        <Route path="/play" component={PlayPage} /> {/* Route for Play Page */}
      </Switch>
    </Router>
  );
}

export default App;
