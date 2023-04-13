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

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="/home">
         <Home></Home>
         </Route>
         <PrivateRoute path="/explore">
          <Explore></Explore>
         </PrivateRoute>
         <Route path="/dashboard">
          <Dashboard></Dashboard>
         </Route>
         <PrivateRoute path="/placeOrder/:serviceId">
         <PlaceOrder></PlaceOrder>
         </PrivateRoute>
         <Route path="/registration">
          <Registration></Registration>
         </Route>
         <Route path="/loginform">
          <Login></Login>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
