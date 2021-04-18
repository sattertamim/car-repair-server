import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Service from './components/Service/Service/Service';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import Login from './components/Admin/Admin/Admin';
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/dashboard/service">
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/service">
            <Service/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
