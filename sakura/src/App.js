import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Register from './components/Register';

function Index() {
  return <AboutUs />;
}

function RegisterUser() {
  return <Register />;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/Register/" component={RegisterUser} />
      </div>
    </Router>
  );
}

export default AppRouter;