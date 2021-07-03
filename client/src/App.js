import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Dataindex from "./pages/DataIndex";
import IndexDetail from './pages/IndexDetail';



function App() {
  return (
    <Router> 
      <Nav />
      <Switch>
          <Route exact path={["/api/brands/"]}>
            <Dataindex />
          </Route>
          <Route exact path={["/api/brands/nameSort"]}>
            < IndexDetail />
          </Route>
          <Route exact path="/api/brandindex/:id/">
            <Profile />
          </Route>
          <Route exact path="/api/brands/sign-up">
            < SignUp />
          </Route>
          < Route exact path="/api/brands/login">
            <SignIn />
          </Route>
          <Footer />
      </Switch>
    </Router>
  );
}
 
export default App;
//this will connect to index.js