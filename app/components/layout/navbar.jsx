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
            <Link to="home" className="navbar-brand">React niko-niko</Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="home" activeClassName="active">Home</Link></li>
              <li><Link to="test" activeClassName="active">Test</Link></li>
              <li><Link to="login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }

}

export { Navbar };



