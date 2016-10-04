import React from 'react';
import style from './navbar.less';
import { Link } from 'react-router';

class Navbar extends React.Component {  

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="home" activeClassName="active">Home</Link></li>
              <li><Link to="login" activeClassName="active">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }

}

export { Navbar };



