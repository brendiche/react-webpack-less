import React from 'react';
import less from './layout.less';
import { Navbar } from './navbar.jsx';

class Layout extends React.Component {

  constructor() {
    super();
    console.log(this);
  }
  

  render() {
    const { history } = this.props;
    var navbar = !history.isActive('login') ? <Navbar></Navbar> : "";
    return (
      <div className="layout">
        {navbar}
        <div className="container main">
          {this.props.children}
        </div>
        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>
      
    );
  }

}

export { Layout };