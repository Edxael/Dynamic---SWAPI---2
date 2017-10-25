import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  // -------------------------
import Categories from './02-Categories.jsx'
import UniPage from './04-UniPage.jsx'
import Logo from './img/one.jpg'

export default class extends Component {
  render() {
    return(
      <div>
        <img src={Logo} alt="miss pic"/>
        <h2>StarWars Info.</h2>

          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Categories}/>
                <Route path="/:id" component={UniPage} />
              </Switch>
            </div>
          </Router>


      </div>
    )
  }
}
