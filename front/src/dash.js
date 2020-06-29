import React,{useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {CssBaseline} from '@material-ui/core'
import {Redirect} from 'react-router-dom'
import Kepala from './dash/kepala'

let useStyle=makeStyles(theme=>({
	root: {
    	display: 'flex',
 	},
}))

export default function Dash() {
	let gaya=useStyle(),[sesi,setSesi]=useState(localStorage.getItem('sesi'))
	if(sesi)return<div className={gaya.root}>
		<CssBaseline/>
		<Kepala/>
	</div>
	else return<Redirect to='/login'/>
}