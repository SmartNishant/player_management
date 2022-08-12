import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch} from 'react-router-dom'

import Header from './container/layout/header/header' 
import Login from './container/login/login'
import Registration from './container/registration/registration'
import FormPage from './container/login/login_design'
import CRoute from '../src/container/custom_route/Croute'
import User_Home  from './container/landing/user_home'
import Admin_Home  from './container/landing/admin_home'
import Home  from './container/landing/home'


import View_users from '../src/container/display/view_all_user'
import display_selected_user from '../src/container/display/display_selected_user'
import unauthorised_access from '../src/container/unauthorised_access/unauthorised_access'
import pageNotFound from '../src/container/pagenotfound/pagenotfound'
const Admin="admin"
  const User="user"
class App extends Component{
  componentWillUpdate(){
  
     
  }
render(){
  return (
    <div className="App">
    
      <Router>
      <Header />
      <Switch>    
      <CRoute exact cprivate crole={[User]}  path="/" component={()=><Home />} />   
        
         <CRoute exact cprivate crole={[User]}  path="/home" component={()=><User_Home />} />   
         <CRoute exact cprivate crole={[Admin]}  path="/admin_home" component={()=><Admin_Home />} />   
        <CRoute  exact crole={[User,Admin]} path="/login" component={()=><Login flag='true' />} />
        <CRoute exact crole={[User,Admin]}  path="/signup" component={Registration} />
     
        <CRoute exact cprivate crole={[Admin]}  path="/view" component={()=><View_users />} />   
        <CRoute exact cprivate crole={[Admin]}   path="/view_selected_user" component={display_selected_user} />   
        <CRoute    exact  path="/unauthorised_access" component={unauthorised_access} />  
        <CRoute component={pageNotFound} /> 
        </Switch>
 
      </Router>
      
     
    </div>
  );
}
}

export default App;
