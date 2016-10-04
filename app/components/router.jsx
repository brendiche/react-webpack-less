import React from 'react';

import { Layout } from './layout/layout.jsx';
import { Login } from './login/login.jsx';
import { Home } from './home/home.jsx';
import { Router, Route, IndexRoute , hashHistory} from 'react-router';

class App extends React.Component{
	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<IndexRoute component={Home} />
					<Route path="login" name="login" component={Login} />
					<Route path="home" name="home" component={Home} />
				</Route>
			</Router>
		);
	}
}

export { App }