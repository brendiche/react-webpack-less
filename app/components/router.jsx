import React from 'react';
import { Login } from './login/login.jsx';
import { Layout } from './layout/layout.jsx';
import { Router, Route, IndexRoute , hashHistory} from 'react-router';

export default () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Login} />
				<Route path="login" component={Login} />

			</Route>
		</Router>
	);
}