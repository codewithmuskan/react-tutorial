import React from 'react';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch,Route } from 'react-router-dom';
import Home from './Home';
import Education  from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Open from './Open';
import Contact from './Contact';
import './Navbar.css';




const App=()=>{
return(
    <>
    <Navbar/>
    <Home/>
    <Switch>
      
        <Route path="/Education" component={Education}/>
        <Route path="/Experience" component={Experience}/>
        <Route path="/Projects" component={Projects}/>
        {/* <Route path="/Open" component={Open}/> */}
        <Route path="/Contact" component={Contact}/>
    </Switch>
    </>
)
}

export default App;
