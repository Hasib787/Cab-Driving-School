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
import ReviewDashboard from './components/Admin/Dashboard/ReviewDashboard/ReviewDashboard';
import Orders from './components/Admin/Dashboard/Orders/Orders';
import OrderList from './components/Admin/AdminDashboard/OrderList/OrderList';
import AddService from './components/Admin/AdminDashboard/AddService/AddService';
import MakeAdmin from './components/Admin/AdminDashboard/MakeAdmin/MakeAdmin';
import ManageService from './components/Admin/AdminDashboard/ManageService/ManageService';
import Checkout from './components/Admin/Dashboard/Checkout/Checkout';

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
          <PrivateRoute path="/admin/bookNow/:bookId">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route path="/review">
            <ReviewDashboard />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageServices">
            <ManageService />
          </Route>
          <PrivateRoute path="/checkout">
              <Checkout />
          </PrivateRoute>
          <Route path="*">
          <NotFound />
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
