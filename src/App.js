import React,{Component} from 'react';
import './App.css';

 import { Navigation } from './Pages/Navigation.js'
 import Home from './Pages/Home'
 import ContactUs from './Pages/ContactUS'

 import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
class  App extends Component{
constructor(){
  super();
}
  render(){
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/ContactUs" component={ContactUs}/>
        
      </Switch>
    </div>
    </Router>
  );
}
}

export default App;
