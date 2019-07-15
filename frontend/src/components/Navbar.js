import React , {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'


class Navbar extends Component {
  logOut(e){
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }
  render(){
    const loginRegLink = {
      <ul className="navbar-nav">
        <li className="nav-item">
          // links p2a
          

        </li>
      </ul>

    }
  }
}
