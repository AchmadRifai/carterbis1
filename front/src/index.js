import React from 'react'
import ReactDOM from 'react-dom'
import 'fontsource-roboto'
import './index.css'
import App from './App'
import Error from './Error'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter, Switch, Route} from 'react-router-dom/cjs/react-router-dom.min'
import Login from './login'
import Dash from './dash'
import Cars from './pages/cars'
import SupportBy from './pages/support'
import Pegawais from './pages/pegawai'
import Abouts from './pages/about'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact><App/></Route>
			<Route path="/login" exact><Login/></Route>
			<Route path="/dash" exact><Dash/></Route>
			<Route path="/cars" exact><Cars/></Route>
			<Route path="/support-by" exact><SupportBy/></Route>
			<Route path="/employers" exact><Pegawais/></Route>
			<Route path="/about" exact><Abouts/></Route>
			<Route><Error/></Route>
		</Switch>
  	</BrowserRouter>,
  	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
