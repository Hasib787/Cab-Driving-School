import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import BookNow from './components/Admin/Dashboard/BookNow/BookNow';
import ReviewDashboard from './components/Admin/Dashboard/ReviewDashboard/ReviewDashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/bookNow">
            <BookNow />
          </Route>
          <Route path="/review">
            <ReviewDashboard />
          </Route>
          <Route path="*">
          <NotFound />
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
