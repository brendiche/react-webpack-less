import React from 'react';
import less from './login.less';

class Login extends React.Component {

  constructor(props) {
    super();
    this.state = {
      login : "",
      password : ""
    };
  }


  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <from>
            <div className="form-group">
              <label for="login">Login</label>
              <input type="text" className="form-control" id="login" placeholder="Login" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
          </from>
        </div>
      </div>
    );
  }

}

export { Login };