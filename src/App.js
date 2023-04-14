import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Contexts/AuthProvider';
import Explore from './Components/Explore/Explore';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Teams from './Components/Teams/Teams';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path="/">
         <Home/>
         </Route>
         <Route path="/home">
         <Home/>
         </Route>
         <PrivateRoute path="/explore">
          <Explore/>
         </PrivateRoute>
         <Route path="/team">
          <Teams/>
         </Route>
         <Route path="/dashboard">
          <Dashboard/>
         </Route>
         <PrivateRoute path="/placeOrder/:serviceId">
         <PlaceOrder/>
         </PrivateRoute>
         <Route path="/registration">
          <Registration/>
         </Route>
         <Route path="/loginform">
          <Login/>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
