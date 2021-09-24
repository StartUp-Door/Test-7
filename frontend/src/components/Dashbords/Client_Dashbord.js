import { Button } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Client_Dashbord = (setAuth) =>{
    
const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("role");
      setAuth(false);
    <Redirect to="/" />
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

     return(
         <Fragment>
                   <h1>client</h1>
                   <Button onClick={e =>logout(e)}  >LogOUT</Button>

         </Fragment>
        
      
     );
}

export default Client_Dashbord;