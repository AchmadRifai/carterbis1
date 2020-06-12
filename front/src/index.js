import React from 'react'
import ReactDOM from 'react-dom'
import 'fontsource-roboto'
import './index.css'
import App from './App'
import Error from './Error'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter, Switch, Route} from 'react-router-dom/cjs/react-router-dom.min'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact/>
			<Route component={Error}/>
		</Switch>
  	</BrowserRouter>,
  	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
