import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from './components/pages/Home/home';
import CompanyOver from './components/pages/CompanyView/CompanyOver';
export default function App() {
  return (
    <Router>
      <switch>
        
        <Route path="/" component={Home}/>
        <Route path="/Company" component={CompanyOver}/>
      </switch>
    </Router>
  )
}
