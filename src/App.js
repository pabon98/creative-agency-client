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
import Contact from './Components/Contact/Contact';

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
         <Route path="/registration">
          <Registration></Registration>
         </Route>
         <Route path="loginform">
          <Login></Login>
         </Route>
         <Route path='/contact'>
           <Contact></Contact>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
