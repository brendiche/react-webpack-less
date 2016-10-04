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
    var valid = (this.state.login === 'test' && this.state.password === 'test');
    valid ? this.props.history.push('home') : this.setState({login:'',password:''});
  }

  render() {
    return (
      <div className="login">
        <div className="jumbotron">
          <from>
            <div className="form-group">
              <label>Login</label>
              <input type="text" className="form-control" id="login" placeholder="Login" value={this.state.login} onChange={this.changeLogin.bind(this)}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.changePassword.bind(this)}/>
            </div>
            <button type="submit" className="btn" onClick={this.login.bind(this)}>Submit</button>
          </from>
        </div>
      </div>
    );
  }

}

export { Login };