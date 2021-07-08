import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUp from "./pages/SignUp/SignUp";
import SignIn from './pages/SignIn/SignIn';
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer";
import Profile from "./pages/Profile/Profile";
import Dataindex from "./pages/DataIndex/DataIndex";
import IndexDetail from './pages/IndexDetail/IndexDetail';
import Home from "./pages/Home";
import Logout from "./pages/Logout";

function App() {
  return (
    <Router> 
      <Nav />
      <Switch>
        <Route exact path={["/"]}>
          <Home />
        </Route>
          <Route exact path={["/api/brands/"]}>
            <Dataindex>
            < IndexDetail />
              </Dataindex>
          </Route>
          <Route exact path={["/api/brands/nameSort"]}>
          </Route>
          <Route exact path="/api/brandindex/profile">
            <Profile />
          </Route>
          <Route exact path="/api/brands/sign-up">
            < SignUp />
          </Route>
          < Route exact path="/api/brands/login">
            <SignIn />
          </Route>
          <Route exact path={["/api/brands/logout"]}>
          <Logout/>
          </Route>
          <Route exact path = {["api/brands/:id" ]}>
            <IndexDetail/>
          </Route>




          <Footer />
      </Switch>
    </Router>

  );
}
 
export default App;
//this will connect to index.js