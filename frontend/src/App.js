import React,{Fragment,useState,useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";



import Client_Dashbord from './components/Dashbords/Client_Dashbord';
import Login from "./components/Authtication/Login";
import Register from "./components/Authtication/Register";
import LandingPage from './components/Landing/Landing';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import FogotPassword from './components/Authtication/FogotPassword';
import ResetPassword from './components/Authtication/ResetPassword';
import AdminHome from './components/Admin/pages/AdminHome';

toast.configure();


function App() {
 const checkrole = async () =>{
     try {
          const role = localStorage.role;
          role === "Client" ? setIsAuthenticated(true):setIsAuthenticated(false)
     } catch (err) {
      console.error(err.message);
     }
 }
  

   useEffect(()=>{
     checkrole();
   },[])

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean =>{
    setIsAuthenticated(boolean);
  }
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}  />
          {/* <Route exact path='/clientD' component={ClientD} /> */}
          <Route exact path="/login" 
            render={props =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/client" />
              )
            }
          />
          <Route exact path="/register" component={Register}  />
          <Route path="/client" 
            render={props =>
              isAuthenticated ? (
                <Client_Dashbord {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/forgotpassword" component={FogotPassword}  />
          <Route path="/reset/:id" component={ResetPassword}  />
          <Route path="/admin" component={AdminHome}   />
        </Switch>
      </Router>
       
       {/*<Register />*/}
      
       
       
    </Fragment>
  );
}

export default App;
