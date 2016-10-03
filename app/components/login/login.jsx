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
  
  changeLogin(e){
    this.setState({login:e.target.value});
  }

  changePassword(e){
    this.setState({password:e.target.value});
  }
  
  login(){
    console.log(this.state);
  }

  render() {
    return (
      <div className="container login">
        <div className="jumbotron">
          <from>
            <div className="form-group">
              <label for="login">Login</label>
              <input type="text" className="form-control" id="login" placeholder="Login" onChange={this.changeLogin.bind(this)}/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.changePassword.bind(this)}/>
            </div>
            <button className="btn" onClick={this.login.bind(this)}>Submit</button>
          </from>
        </div>
      </div>
    );
  }

}

export { Login };