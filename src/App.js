import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NabBar/Navbar" 
import Donors from './components/dashboard/Donors/Donors';
import RegisterDonor from "./components/dashboard/Donors/RegisterDonor"
import LogOut from "./components/auth/LogOut"
/* import Profile from "./components/Profile/Profile" */
import DonorDetails from "./components/dashboard/Donors/DonorDetails"


import UserProfile from './components/Profile/UserProfile';
const App = () => {
    return (
      <Router>
        <Fragment>
        <Navbar />
        <Route exact path="/" component={Donors}/>
        <Route exact path="/RegisterDonor" component={RegisterDonor} />
        <Route exact path="/LogOut" component={LogOut} />
        <Route exact path="/Details/:id" component={DonorDetails} />
        <Route exact path="/Profile" component={UserProfile} />
       
      
        </Fragment>
      </Router>
    );
  }

export default App;
