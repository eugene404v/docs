import React from 'react'
import {Route} from 'react-router-dom'
import Header from './layout/header/header'
import Home from './layout/home/home'
import Clients from './layout/clients/clients'

function App() {
  return <div className="App">
      <Header/>
      <div className="sidebar"></div>
      <div className="mainview">
        <Route exact path="/" component={Home}/>
        <Route exact path="/clients" component={Clients}/>
      </div>
  </div>;
}

export default App;
