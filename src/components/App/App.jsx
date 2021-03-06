import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import HeadOut from '../HeadOut/HeadOut.jsx';
import Inventory from '../Inventory/Inventory.jsx';
import Pack from '../Pack/Pack.jsx';
import Unpack from '../Unpack/Unpack.jsx';
import NavAppBar from '../NavAppBar/NavAppBar.jsx';
import NavBarBOT from '../NavBarBOT/NavBarBOT.jsx';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({type: 'GET_PACKS'})
    dispatch({type: 'GET_CONSUMABLES'})
    dispatch({type: 'GET_GEAR'})
    dispatch({type: 'GET_CATEGORIES'})
    dispatch({type: 'SET_CP_INDEX'})
  }, []);

  return (
    <Router>
      <div>
        
        {/* <Nav /> */}
        <NavAppBar />

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route
            exact
            path="/info"
          >
            <InfoPage />
          </Route>
          
          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/headout"
          >
            <HeadOut />
          </ProtectedRoute>

          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/pack"
          >
            <Pack />
          </ProtectedRoute>

          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/inventory"
          >
            <Inventory />
          </ProtectedRoute>

          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/unpack"
          >
            <Unpack />
          </ProtectedRoute>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>

        <NavBarBOT/>
      </div>
    </Router>
  );
}

export default App;
