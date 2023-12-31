import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ClassicRoutes from './routes/Classic';
import AuthRoutes from './routes/AuthRoutes';
import "bootstrap/js/src/collapse";
import ScrollToTop from './utils/ScrollToTop';
import Signin from './Login/Signin';
import Signup from './Login/Signup';
import Forget from './Login/Forget';
import Dashboard from './views/Dashboard';
import { AuthContextProvider } from './Login/AuthContext';
import ProtectedRoute from './Login/PrivateRoute';

function App() {
  const token = localStorage.getItem('Accesstoken');
  console.log(token, "qqqqqqqqqqqqqqqqqqqqqqq");

  return (
    <BrowserRouter>
      <ScrollToTop>
        <AuthContextProvider>
          <Switch>
            {token ? (
              <Route path="/signin">
                <Redirect to="/dashboard" />
              </Route>
            ) : (
              <Route path="/signin" component={Signin} />
            )}

            {token ? (
              <Route path="/signup">
                <Redirect to="/dashboard" />
              </Route>
            ) : (
              <Route path="/signup" component={Signup} />
            )}

            {token ? (
              <Route path="/forget">
                <Redirect to="/dashboard" />
              </Route>
            ) : (
              <Route path="/forget" component={Forget} />
            )}

            <Route path="/dashborad" component={Dashboard} />

            <Redirect exact from="/" to="/signin" />

            <Route path="/auth" render={(props) => <ProtectedRoute> <AuthRoutes {...props} /> </ProtectedRoute>} />
            <Route path="/" render={(props) => <ProtectedRoute> <ClassicRoutes {...props} /></ProtectedRoute>} />
          </Switch>
        </AuthContextProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;




